#!/bin/sh
rm -rf ./dist
npm run build
cd ./dist
touch .nojekyll
git init
git add .
git commit -m 'push to gh-page'
## Change the line below to deploy to your gh-page
git push --force git@github.com:toucan4life/map-of-boardgames.git main:gh-page
cd ../
