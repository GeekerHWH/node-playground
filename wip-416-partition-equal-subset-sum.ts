import assert from 'node:assert/strict';
import { test } from 'node:test';

function canPartition(nums: number[]): boolean {
  if (nums.length < 2) {
    return false
  }
  let sum = nums.reduce((res, a) => res + a, 0)
  if (sum % 2 !== 0) {
    return false
  }
  return true
};

export default function testAll(): void {
  console.log("416-partition-equal-subset-sum")
  test('Case 1', t => {
    let res = canPartition([1,5,11,5])
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
}
