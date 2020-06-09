#!/bin/sh

rm -rf /ric-proto/node_modules

ln -s /node/node_modules /ric-proto/node_modules

cd ric-proto

# because ./compile load .env file we need move it
mv .env .env.back || true

./compile.sh

# move .env back
mv .env.back .env || true

rm node_modules

find . -mindepth 1 -maxdepth 1 -type d -not -name '.git*' -print0 | xargs -0 chown -R 1000:1000
