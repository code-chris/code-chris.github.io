#!/bin/bash
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "source" ]; then exit 0; fi

set -o errexit

# config
git config --global user.email "christian.kotzbauer@gmail.com"
git config --global user.name "Christian Kotzbauer"

# deploy
git subtree push --prefix=build/out https://${GITHUB_TOKEN}@github.com/code-chris/code-chris.github.io.git master
