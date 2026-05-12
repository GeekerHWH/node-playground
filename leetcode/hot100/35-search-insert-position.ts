import assert from 'node:assert/strict';
import { test } from 'node:test';

function searchInsert(nums: number[], target: number): number {
  let left = 0, right = nums.length-1
  let ans = right = nums.length
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= nums[mid]) {
      ans = mid
      right = mid-1
    } else {
      left = mid +1
    }
  }
  return ans
};

export default function testAll(): void {
  console.log("35-search-insert-position")
  test('Case 1', t => {
    let nums = [1,3,5,6]
    let res = searchInsert(nums, 5)
    assert.deepStrictEqual(res, 2, 'should be 2, but get '+ res)
  })
  test('Case 2', t => {
    let nums = [1,3,5,6]
    let res = searchInsert(nums, 2)
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ res)
  })
  test('Case 3', t => {
    let nums = [1,3,5,6]
    let res = searchInsert(nums, 7)
    assert.deepStrictEqual(res, 4, 'should be 4, but get '+ res)
  })
  test('Case 4', t => {
    let nums = [1]
    let res = searchInsert(nums, 1)
    assert.deepStrictEqual(res, 0, 'should be 0, but get '+ res)
  })
  test('Case 5', t => {
    let nums = [1,3]
    let res = searchInsert(nums, 0)
    assert.deepStrictEqual(res, 0, 'should be 0, but get '+ res)
  })
}
