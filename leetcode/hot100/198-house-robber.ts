import assert from 'node:assert/strict';
import { test } from 'node:test';

function rob(nums: number[]): number {
  let n = nums.length
  if (n === 1) {
    return nums[0]
  }
  let dp = new Array(nums.length).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++){
    dp[i] = Math.max(dp[i-1], dp[i-2]+nums[i])
  }
  return dp[n-1]
};

// note that we only use two elements of dp table in V1,
// and we don't need to remeber all of it for final result
function robV2(nums: number[]): number {
  let n = nums.length
  if (n === 1) {
    return nums[0]
  }
  let leftPair = nums[0]
  let rightPair = Math.max(nums[0], nums[1])
  for (let i = 2; i < n; i++){
    let bestOption = Math.max(rightPair, leftPair + nums[i])
    leftPair = rightPair
    rightPair = bestOption
  }
  return rightPair
};

export default function testAll(): void {
  console.log("198-house-robber")
  let toBeTestedFn = robV2
  test('Case 1', t => {
    let res = toBeTestedFn([1,2,3,1])
    assert.deepStrictEqual(res, 4, 'should be 4, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = toBeTestedFn([2,7,9,3,1])
    assert.deepStrictEqual(res, 12, 'should be 12, but get '+ JSON.stringify(res))
  })
}
