# ric-proto
gRPC/Protocol Buffers protofiles for ric services

## dependencies

- [uber prototool](https://github.com/uber/prototool)
- [protoc-go-inject-tag](https://github.com/favadi/protoc-go-inject-tag)

## generate

```bash
$ ./compile.sh
```

## lint && format

```bash
$ prototool lint
$ prototool format -w
```
