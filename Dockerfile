FROM ubuntu:18.04 as builder

RUN apt-get update \
    && apt-get install -y build-essential autoconf libtool pkg-config cmake git curl

RUN curl -sSL https://dl.google.com/go/go1.14.4.linux-amd64.tar.gz -o go.tar.gz \
    && tar -C /usr/local -xzf go.tar.gz

ENV PATH=/usr/local/go/bin:$PATH

RUN git clone -b v1.20.0 https://github.com/grpc/grpc

WORKDIR /grpc

RUN git submodule update --init

RUN mkdir -p cmake/build \
    && cd cmake/build \
    && cmake ../.. -DCMAKE_BUILD_TYPE=Release -DBUILD_SHARED_LIBS=ON \
    && make

RUN go get github.com/favadi/protoc-go-inject-tag

RUN go get github.com/golang/protobuf/protoc-gen-go

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - \
    && apt-get install -y nodejs

WORKDIR /node

COPY package.json .
COPY package-lock.json .

RUN npm install

RUN curl -sSL \
  https://github.com/uber/prototool/releases/download/v1.10.0/prototool-$(uname -s)-$(uname -m) \
  -o /usr/local/bin/prototool && \
  chmod +x /usr/local/bin/prototool

RUN prototool cache update --config-data '{"protoc":{"version":"3.7.0"}}'

FROM ubuntu:18.04

RUN apt-get update && apt-get install -y g++

RUN adduser --disabled-password --gecos "" user

COPY --from=builder /grpc/cmake/build /grpc
COPY --from=builder /root/go/bin/protoc-go-inject-tag /usr/local/bin/
COPY --from=builder /root/go/bin/protoc-gen-go /usr/local/bin/
COPY --from=builder /usr/bin/node /usr/bin/node
COPY --from=builder /node /node
COPY --from=builder --chown=user:user /root/.cache/prototool /home/user/.cache/prototool
COPY --from=builder /usr/local/bin/prototool /usr/local/bin/

ENV PATH=/grpc:$PATH
ENV LD_LIBRARY_PATH=/grpc:/grpc/third_party/protobuf:$LD_LIBRARY_PATH

COPY docker-entrypoint.sh .

USER user

ENTRYPOINT ["/docker-entrypoint.sh"]