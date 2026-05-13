import assert from 'node:assert/strict';
import { test } from 'node:test';

function lowerBoundHelper(nums: number[], x: number): number{
  let left = 0, right = nums.length-1
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (x <= nums[mid]) {
      right = mid-1
    } else {
      left = mid+1
    }
  }
  return left
}

function searchRange(nums: number[], target: number): number[] {
  let start = lowerBoundHelper(nums, target)
  if (nums[start] != target || start === nums.length) {
    return [-1, -1]
  }
  let end = lowerBoundHelper(nums, target+1) -1
  return [start, end]
};

export default function testAll(): void {
  console.log("34-find-first-and-last-position-of-element-in-sorted-array")
  test('Case 1', t => {
    let res = searchRange([5,7,7,8,8,10], 8)
    assert.deepStrictEqual(res, [3,4], 'should be [3,4], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = searchRange([5,7,7,8,8,10], 6)
    assert.deepStrictEqual(res, [-1,-1], 'should be [-1,-1], but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = searchRange([], 0)
    assert.deepStrictEqual(res, [-1,-1], 'should be [-1,-1], but get '+ JSON.stringify(res))
  })
}
