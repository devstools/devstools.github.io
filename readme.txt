## If you re-clone project from other machine you should re-clone submodule
- git submodule init
git submodule update

## Config
- copy file git .gh-pages.yml to path .git/workflows/gh-pages.yml: mv gh-pages.yml .git/workflows/

## Build and deploy
- generate html file: hugo -D
- push commit to branch main

======== Go to devstools.github.io and enjoy ========