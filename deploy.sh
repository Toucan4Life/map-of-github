#!/bin/sh
rm -rf ./dist
npm run build
cd ./dist
touch .nojekyll
git init
git add .
git commit -m 'push to gh-page'
## Change the line below to deploy to your gh-page
git push origin main:gh-page --force
cd ../
