#!/bin/sh

prototool format -w
prototool generate
protoc-go-inject-tag -input=go/ric-tasks/rictasks.pb.go -XXX_skip=bson
protoc-go-inject-tag -input=go/ric-bots/ricbots.pb.go -XXX_skip=bson
