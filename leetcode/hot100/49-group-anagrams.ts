import assert from 'node:assert/strict';
import { test } from 'node:test';

function groupAnagrams(strs: string[]): string[][] {
  let map = new Map<string, Array<string>>()
  for (let s of strs) {
    let counter = new Array<number>(26).fill(0)
    for (let c of s) {
      counter[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
    }
    let counterKey = counter.join()

    if (!map.has(counterKey)) {
      map.set(counterKey, [])
    }
    map.get(counterKey)!.push(s)
  }
  return Array.from(map.values()) // build array from iterable
};

export default function testAll(): void {
  console.log("49-group-anagrams")
  // 测试用例可以不同顺序, 本处省略
}
