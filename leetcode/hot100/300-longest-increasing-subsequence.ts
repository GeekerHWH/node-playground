import assert from 'node:assert/strict';
import { test } from 'node:test';

function lengthOfLIS(nums: number[]): number {
  let ans: number =0
  let tail: number[] = Array(nums.length).fill(0)
  for (const num of nums) {
    let left = 0, right = ans
    while (left < right) {
      let mid = ((right - left) >> 1) + left
      if (num <= tail[mid]) {
        right = mid
      } else {
        left = mid +1
      }
    }
    tail[right] = num
    if (ans === right) {
      ans++
    }
  }
  return ans
};

export default function testAll(): void {
  console.log("300-longest-increasing-subsequence")
  test('Case 1', t => {
    let res = lengthOfLIS([10,9,2,5,3,7,101,18])
    assert.deepStrictEqual(res, 4, 'should be [2,3,7,101], so length is 4, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = lengthOfLIS([0,1,0,3,2,3])
    assert.deepStrictEqual(res, 4, 'should be [0,1,2,3], so length is 4, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = lengthOfLIS([7,7,7,7,7,7,7])
    assert.deepStrictEqual(res, 1, 'should be [7], so length is 1, but get '+ JSON.stringify(res))
  })
}
