import assert from 'node:assert/strict';
import { test } from 'node:test';

// original O(n*volume) mem cost
function maxValue(weights: number[], values: number[], volume: number): number {
  let n = values.length
  if (n === 0) {
    return 0
  }
  let dp = new Array(n).fill(0).map(() => new Array(volume+1).fill(0)) // 对于0到i区间，容量为j限制下，能装下的最大价值

  // 对于不同容量，如果能放得下第一件物品，拿着
  for (let j = 0; j <= volume; j++){
    if (weights[0] <= j) {
      dp[0][j]= values[0]
    }
  }

  for (let i = 1; i < n; i++){
    for (let j = 0; j <= volume; j++){
      if (j >= weights[i]) { // 能选的情况，选或不选
        dp[i][j] = Math.max(dp[i-1][j-weights[i]]+values[i], dp[i-1][j])
      } else { // 选不了的情况，套之前的组合
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[n-1][volume]
}

// tuning version mem cost O(volume)
function maxValueV2(weights: number[], values: number[], volume: number): number {
  let n = values.length
  if (n === 0) {
    return 0
  }
  let dp = new Array(volume+1).fill(0) // 对于0到i区间，容量为j限制下，能装下的最大价值

  // 对于不同容量，如果能放得下第一件物品，拿着
  for (let j = 0; j <= volume; j++){
    if (weights[0] <= j) {
      dp[j]= values[0]
    }
  }

  for (let i = 1; i < n; i++){
    for (let j = volume; j >= 0; j--) {  // 关键修改：从大到小，确保不用到当前这轮脏数据
      if (j >= weights[i]) { // 能选的情况，选或不选
        dp[j] = Math.max(dp[j-weights[i]]+values[i], dp[j])
      } else { // 选不了的情况，套之前的组合
        dp[j] = dp[j]
      }
    }
  }
  return dp[volume]
}

export default function testAll(): void {
  let beTestedFn = maxValueV2
  console.log("knapsack-problem")
  test('Case 1', t => {
    let values = [1, 3, 5]
    let weights = [1, 2, 3]
    let res = beTestedFn(weights,values, 5)
    assert.deepStrictEqual(res, 8, 'should be 8, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let values = [300, 200, 400, 500]
    let weights = [2, 1, 5, 3]
    let res = beTestedFn(weights,values, 10)
    assert.deepStrictEqual(res, 1200, 'should be 1200, but get '+ JSON.stringify(res))
  })
  // 只有一件物品，容量恰好足够
  test('Case 3', t => {
    let res = beTestedFn([5], [10], 5)
    assert.deepStrictEqual(res, 10, 'should be 10')
  })

  // 只有一件物品，容量不足
  test('Case 4', t => {
    let res = beTestedFn([5], [10], 4)
    assert.deepStrictEqual(res, 0, 'should be 0')
  })

  // 只有一件物品，容量超过物品重量
  test('Case 5', t => {
    let res = beTestedFn([5], [10], 8)
    assert.deepStrictEqual(res, 10, 'should be 10')
  })

  test('Case 6', t => {
    let res = beTestedFn([2, 3], [4, 5], 3)
    assert.deepStrictEqual(res, 5, 'should be 5 (pick item 0)')
  })

  // 容量为 0
  test('Case 7', t => {
    let res = beTestedFn([1, 2, 3], [10, 20, 30], 0)
    assert.deepStrictEqual(res, 0, 'should be 0')
  })

  // 空物品列表
  test('Case 8', t => {
    let res = beTestedFn([], [], 5)
    assert.deepStrictEqual(res, 0, 'should be 0')
  })

  // 所有物品总重量小于等于容量，全部可放入
  test('Case 9', t => {
    let res = beTestedFn([1, 2, 3], [10, 20, 30], 6)
    assert.deepStrictEqual(res, 60, 'should be 60')
  })

  // 多个物品，需要跳过较重的物品才能获得最优解
  test('Case 10', t => {
    // 物品: 4/10, 5/20, 6/30, 容量10 -> 最优: 4+6=10, 价值40
    let res = beTestedFn([4, 5, 6], [10, 20, 30], 10)
    assert.deepStrictEqual(res, 40, 'should be 40 (pick 4 and 6)')
  })

  // 重量相同但价值不同的物品
  test('Case 11', t => {
    let res = beTestedFn([2, 2, 2], [5, 10, 15], 4)
    assert.deepStrictEqual(res, 25, 'should be 25 (pick the two most valuable)')
  })

  // 较大数据量随机测试（小规模验证）
  test('Case 12', t => {
    let weights = [1, 3, 4, 5]
    let values = [1, 4, 5, 7]
    let res = beTestedFn(weights, values, 7)
    // 可选: 3+4重量7价值9, 或5+1重量6价值8 -> 最优9
    assert.deepStrictEqual(res, 9, 'should be 9 (weights 3 and 4)')
  })

  // 物品顺序不影响结果
  test('Case 13', t => {
    let res1 = beTestedFn([1, 2, 3], [10, 20, 30], 4)
    let res2 = beTestedFn([3, 1, 2], [30, 10, 20], 4)
    assert.deepStrictEqual(res1, res2, 'results should be equal regardless of order')
  })
}
