#!/bin/sh

# basic usage: ./replace.sh <problem number>
#              ./replace.sh 389. Find the Difference

input="$*"
replaceSpace="$(echo "$input" \
  | sed 's/\. /-/g; s/ /-/g; s/\.//g' \
  | tr '[:upper:]' '[:lower:]').ts"

echo "$replaceSpace"
