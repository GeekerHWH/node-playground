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

  const n = nums.length
  const target = sum >> 1

  // 从0到i，是否存在一个子集让和恰好等于j
  let dp = new Array(n).fill(false).map(() => new Array(target + 1).fill(false))
  for (let i = 0; i < n; i++){
    dp[i][0] = true
  }
  dp[0][nums[0]] = true

  for (let i = 1; i < n; i++){
    for (let j = 0; j <= target; j++){
      if (nums[i] > j) {
        dp[i][j] = dp[i-1][j]
      } else {
        dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]]
      }
    }
  }
  return dp[n-1][target]
};

function canPartitionV2(nums: number[]): boolean {
  if (nums.length < 2) {
    return false
  }
  let sum = nums.reduce((res, a) => res + a, 0)
  if (sum % 2 !== 0) {
    return false
  }

  const n = nums.length
  const target = sum >> 1

  // 从0到i，是否存在一个子集让和恰好等于j
  let dp = new Array(target + 1).fill(false)
  dp[0] = true
  dp[nums[0]] = true

  for (let i = 1; i < n; i++){
    for (let j = target; j >= 0; j--){
      if (nums[i] > j) {
        dp[j] = dp[j]
      } else {
        dp[j] = dp[j] || dp[j-nums[i]]
      }
    }
  }
  return dp[target]
};

export default function testAll(): void {
  const beTestedFn = canPartitionV2
  console.log("416-partition-equal-subset-sum")
  test('Case 1', t => {
    let res = beTestedFn([1,5,11,5])
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = beTestedFn([1,2,3,5])
    assert.deepStrictEqual(res, false, 'should be false, but get '+ JSON.stringify(res))
  })
}
