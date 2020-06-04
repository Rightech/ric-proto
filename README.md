# ric-proto
gRPC/Protocol Buffers protofiles for ric services

## compile

```bash
$ docker run -it --rm -v (pwd):/ric-proto docker.pkg.github.com/rightech/ric-proto-compiler/compiler:latest
```

To access docker image you shoult generate [github token](https://github.com/settings/tokens) with scope: `repo`, `write:packages`,`read:packages`. 
