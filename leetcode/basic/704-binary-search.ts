import assert from 'node:assert/strict';
import { test } from 'node:test';

function search(nums: number[], target: number): number {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left
    if (target === nums[mid]) {
      return mid
    } else if (target < nums[mid]){
      right = mid-1
    } else {
      left = mid + 1
    }
  }
  return -1
};

export default function testAll(): void {
  console.log("704. binary search")
  test('Case 1', t => {
    let input = [-1,0,3,5,9,12]
    let target = 9
    let res = search(input, target)
    assert.equal(res, 4, 'should be 4, but get ' + res)
  })
  test('Case 2', t => {
    let input = [-1,0,3,5,9,12]
    let target = 2
    let res = search(input, target)
    assert.equal(res, -1, 'should be -1, but get ' + res)
  })
  test('Case 3', t => {
    let input = [-1, 0, 5]
    let target = 5
    let res = search(input, target)
    assert.equal(res, 2, 'should be 2, but get ' + res)
  })
}
