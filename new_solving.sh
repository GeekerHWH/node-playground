#!/bin/sh

# basic usage: ./new_solving.sh <problem number>
#              ./new_solving.sh 389. Find the Difference

input="$*"
replaceSpace="$(echo "$input" \
  | sed 's/\. /-/g; s/ /-/g; s/\.//g' \
  | tr '[:upper:]' '[:lower:]')"
OUTPUT_FILE="${replaceSpace}.ts"

cat <<EOF > ${OUTPUT_FILE}
import assert from 'node:assert/strict';
import { test } from 'node:test';

function xxx() {}

export default function testAll(): void {
  console.log("${replaceSpace}")
  test('Case 1', t => {
    let l1 = ListNode.FromArray([1,2,4])
    let l2 = ListNode.FromArray([1,3,4])
    let res = ListNode.toArray(mergeTwoLists(l1, l2))
    assert.deepStrictEqual(res, [1,1,2,3,4,4], 'should be [1,1,2,3,4,4], but get '+ JSON.stringify(res))
  })
}
EOF
