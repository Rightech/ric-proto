#!/bin/bash

if [ -f .env ]; then
  set -o allexport
  source .env
  set +o allexport
fi

rm -rf cpp
rm -rf go
rm -rf dts

mkdir dts

prototool format -w
prototool generate

if [ $? -ne 0 ]; then
  exit $?
fi

for path in go/*/*.pb.go
do
    protoc-go-inject-tag -input=$path -XXX_skip=bson
done

node gen-dts.js || true
