#!/bin/sh

rm -rf ric-proto/node_modules

ln -s /node/node_modules ric-proto/node_modules

cd ric-proto

./compile.sh

rm node_modules
