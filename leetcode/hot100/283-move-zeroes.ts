import assert from 'node:assert/strict';
import { test } from 'node:test';

function moveZeroes(nums: number[]): void {
  let left = 0, right = 0
  while (right<nums.length) {
    if (nums[right] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]]
      left++
    }
    right++
  }
};

export default function testAll(): void {
  console.log("283-move-zeroes")
  test('Case 1', t => {
    let nums = [0,1,0,3,12]
    moveZeroes(nums)
    assert.deepStrictEqual(nums, [1,3,12,0,0], 'should be [1,3,12,0,0], but get '+ JSON.stringify(nums))
  })
  test('Case 2', t => {
    let nums = [0]
    moveZeroes(nums)
    assert.deepStrictEqual(nums, [0], 'should be [0], but get '+ JSON.stringify(nums))
  })
}
