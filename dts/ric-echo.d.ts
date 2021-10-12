export interface Greeter {
  SayHello(request: HelloRequest): Promise<HelloReply>;
}

export interface HelloRequest {
  name?: string;
}

export interface HelloReply {
  message?: string;
}