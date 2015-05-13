#!/usr/bin/env bash

IMAGE="brymastr/portfolio"
docker ps | grep $IMAGE | awk '{print $1}' | xargs docker stop
docker pull $IMAGE
docker run -d -e VIRTUAL_HOST=brycendorsay.com $IMAGE