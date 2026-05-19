import assert from 'node:assert/strict';
import { test } from 'node:test';

function partition(nums: number[], l: number, r: number, k: number): number{
  if (l === r) {
    return nums[k]
  }
  let mid = ((r-l)>>1) + l
  let pivot = nums[mid]
  let i = l-1
  let j = r+1
  while (i < j) {
    i++
    j--
    while (nums[i] < pivot) { i++ }
    while (nums[j] > pivot) { j-- }
    if (i < j) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
    }
  }
  if (k <= j) {
    return partition(nums, l, j, k)
  } else {
    return partition(nums, j+1, r, k)
  }
}

function findKthLargest(nums: number[], k: number): number {
  return partition(nums, 0, nums.length-1, nums.length-k)
};

export default function testAll(): void {
  console.log("215-kth-largest-element-in-an-array")
  test('Case 1', t => {
    let res = findKthLargest([3,2,1,5,6,4], 2)
    assert.deepStrictEqual(res, 5, 'should be 5, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = findKthLargest([3,2,3,1,2,4,5,5,6], 4)
    assert.deepStrictEqual(res, 4, 'should be 4, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = findKthLargest([2,1], 2)
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ JSON.stringify(res))
  })
}
