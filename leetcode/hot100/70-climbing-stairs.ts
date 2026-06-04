import assert from 'node:assert/strict';
import { test } from 'node:test';

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// ## 示例 1：
// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// ## 示例 2：
// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

function climbStairs(n: number): number {
  let twoStepFront = 1, oneStepFront = 2, x = n
  for (let i = 3; i <= n; i++){
    x = oneStepFront + twoStepFront
    twoStepFront = oneStepFront
    oneStepFront = x
  }
  return x
};

export default function testAll(): void {
  console.log("70-climbing-stairs")
  let toBeTestedFn = climbStairs
  test('Case 1', t => {
    let res = toBeTestedFn(2)
    assert.deepStrictEqual(res, 2, 'should be 2, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = toBeTestedFn(3)
    assert.deepStrictEqual(res, 3, 'should be 3, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = toBeTestedFn(4)
    assert.deepStrictEqual(res, 5, 'should be 5, but get '+ JSON.stringify(res))
  })
}
