#!/bin/sh

prototool generate
protoc-go-inject-tag -input=go/ric-tasks/rictasks.pb.go -XXX_skip=bson
