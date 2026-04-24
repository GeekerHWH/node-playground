import assert from 'node:assert/strict';
import { test } from 'node:test';

function merge(intervals: number[][]): number[][] {
  if (intervals.length === 0){
    return intervals
  }

  intervals.sort((a, b) => { return a[0] - b[0] })

  const result: number[][] = []
  let curInterval = intervals[0]
  intervals.forEach((interval, index) => {
    if (canMerge(curInterval, interval)) {
      curInterval = [curInterval[0], Math.max(curInterval[1],interval[1])]
    } else {
      result.push(curInterval)
      curInterval = interval
    }
  })
  result.push(curInterval)
  return result
};

function canMerge(a: number[], b: number[]): boolean{
  if (a[1] >= b[0]) {
    return true
  }
  return false
}

export default function testAll(): void{
  test('Case 1', t => {
    let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
    let res = merge(intervals)
    assert.deepStrictEqual(res, [[1,6],[8,10],[15,18]], 'should be [[1,6],[8,10],[15,18]], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let intervals = [[1,4],[4,5]]
    assert.deepStrictEqual(merge(intervals), [[1,5]], 'should be [[1,5]]')
  })
  test('Case 3', t => {
    let intervals = [[4, 7], [1, 4]]
    let res = merge(intervals)
    assert.deepStrictEqual(res, [[1,7]], 'should be [[1,7]], but get '+ JSON.stringify(res))
  })
  test('Case 4', t => {
    let intervals = [[1, 4], [1, 4]]
    let res = merge(intervals)
    assert.deepStrictEqual(res, [[1,4]], 'should be [[1,4]]')
  })
  test('Case 5', t => {
    let intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
    let res = merge(intervals)
    assert.deepStrictEqual(res, [[1,10]], 'should be [[1,10]]')
  })
  test('Case 6', t => { // 四个区间，两两不行，总体行
    let intervals = [[4,5],[2,4],[4,6],[3,4],[0,0],[1,1],[3,5],[2,2]]
    let res = merge(intervals)
    assert.deepStrictEqual(res, [[0,0],[1,1],[2,6]], 'should be [[0,0],[1,1],[2,6]], but get '+ JSON.stringify(res))
  })
}
