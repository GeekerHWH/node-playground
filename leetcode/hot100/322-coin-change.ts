import assert from 'node:assert/strict';
import { test } from 'node:test';

function coinChange(coins: number[], amount: number): number {
  let dp = new Array(amount + 1).fill(amount+1)
  dp[0] = 0
  for (let i = 1; i <= amount; i++){
    for (let j = 0; j < coins.length; j++){
      if (i>=coins[j] && dp[i-coins[j]]+1 <= dp[i]) {
        dp[i] = dp[i-coins[j]]+1
      }
    }
  }
  return dp[amount] > amount? -1 : dp[amount]
};

export default function testAll(): void {
  console.log("322-coin-change")
  test('Case 1', t => {
    let res = coinChange([1,2,5],11)
    assert.deepStrictEqual(res, 3, 'should be 3, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = coinChange([2],3)
    assert.deepStrictEqual(res, -1, 'should be -1, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = coinChange([1],0)
    assert.deepStrictEqual(res, 0, 'should be 0, but get '+ JSON.stringify(res))
  })
  test('Case 4', t => {
    let res = coinChange([186,419,83,408],6249)
    assert.deepStrictEqual(res, 20, 'should be 20, but get '+ JSON.stringify(res))
  })
}
