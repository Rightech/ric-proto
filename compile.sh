#!/bin/sh

for dir in */
do
    dir=${dir%*/}

    if [ "$dir" = "go" ] || [ "$dir" = "js" ]; then
        continue
    fi

    mkdir -p go js/$dir
    protoc --lint_out=sort_imports:. --go_out=plugins=grpc:go $dir/*.proto
done
