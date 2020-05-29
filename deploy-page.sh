#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "source" ]; then exit 0; fi

set -o errexit

# config
git config --global user.email "christian.kotzbauer@gmail.com"
git config --global user.name "Christian Kotzbauer"

git clone https://${GH_TOKEN}@github.com/ckotzbauer/ckotzbauer.github.io.git -b master public

# build
rm -rf public/assets public/content public/posts
rm public/feed.xml public/index.html public/robots.txt public/sitemap.xml
cp -R -T build/out/ public

# deploy
cd public
git add .
git commit -m "Deploy to Github Pages"
git push origin master
