#!/usr/bin/env bash
cd /tmp

# try to remove the repo if it already exists
rm -rf portfolio-v3; true

git clone https://github.com/Brymastr/portfolio-v3.git

cd portfolio-v3

npm install

bower install --allow-root

node server.js