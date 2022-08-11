#!/bin/bash

git checkout gh-pages && \
temp=`mktemp -d` && \
npm run generate && \
cp -R dist/* $temp/ && \
git checkout master && \
rm -rf ./dist ./font ./static && \
cp -R $temp/* ./ && \
git add . && \
git commit -m "build" && \
git push origin master && \
git checkout gh-pages
