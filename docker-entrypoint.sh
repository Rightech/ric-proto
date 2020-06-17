#!/bin/bash

# backup original node_modules
mv /ric-proto/node_modules /node/node_modules.back || true

ln -s /node/node_modules /ric-proto/node_modules

cd ric-proto

# because ./compile load .env file we need move it
mv .env .env.back || true

./compile.sh

# move .env back
mv .env.back .env || true

rm node_modules

# restore original modules
mv /node/node_modules.back /ric-proto/node_modules || true

find . -mindepth 1 -maxdepth 1 -type d -not -name '.git*' -print0 | xargs -0 chown -R $USER_ID:$USER_GROUP
