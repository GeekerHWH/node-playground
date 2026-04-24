import assert from 'node:assert/strict';
import { test } from 'node:test';

function merge(intervals: number[][]): number[][] {
  // 递归 分治法： 最基本情况，两两考察，if(right index >= left index) { doMerge }
  if (intervals.length === 0 || intervals.length === 1) {
    return intervals
  }
  if (intervals.length === 2) {
    let res = baseMerge(intervals[0],intervals[1])
    return res
  }
  if (intervals.length === 3) {
    let temp = baseMerge(intervals[0], intervals[1])
    if (temp.length === 2) { // 前两个没合成
      temp = baseMerge(intervals[1], intervals[2])
      if (temp.length === 2) { // 后两个没合成
        temp = baseMerge(intervals[0], intervals[2])
        if (temp.length === 2) { // 后两个没合成
          return intervals
        }
        return baseMerge(temp[0], intervals[1])
      }
      return baseMerge(temp[0], intervals[0])
    }
    return baseMerge(temp[0], intervals[2])
  }

  const middle = Math.round(intervals.length / 2) // 偏右一位
  const left = merge(intervals.slice(0, middle))
  const right = merge(intervals.slice(middle, intervals.length))
  const leftMergeRight = left.concat(right)
  return merge(leftMergeRight)
};

// result.lenght === 1 or result.lenght === 2
function baseMerge(a: number[], b: number[]): number[][] {
  if (canMerge(a,b)) {
    return [[Math.min(Math.min(...a), Math.min(...b)), Math.max(Math.max(...a), Math.max(...b))]]
  }
  return [a,b]
}

function canMerge(a: number[], b: number[]): boolean {
  // 有交集
  if ((Math.max(...a) >= Math.min(...b) && Math.min(...a) <= Math.min(...b)) ||
    (Math.max(...b) >= Math.min(...a) && Math.min(...b) <= Math.min(...a))
  ) {
    return true
  }
  // 有交集的对立面是无交集
  return false
}

function testBaseMerge(): void {
  const a = [8, 10]
  const b = [15, 18]
  console.log(baseMerge(a,b))
}

function testCanMerge(): void {
  const a = [2, 3]
  const b = [1, 10]
  console.log(canMerge(a,b))
}

export default function testAll(): void{
  // test('Case 1', t => {
  //   // testBaseMerge()
  //   let intervals = [[1,3],[2,6],[8,10],[15,18]]
  //   assert.equal(merge(intervals), [[1,6],[8,10],[15,18]], 'should be [[1,6],[8,10],[15,18]]')
  // })
  // test('Case 2', t => {
  //   let intervals = [[1,4],[4,5]]
  //   assert.equal(merge(intervals), [[1,5]], 'should be [[1,5]]')
  // })
  // test('Case 3', t => {
  //   let intervals = [[4,7],[1,4]]
  //   assert.equal(merge(intervals), [[4,7],[1,4]], 'should be [[4,7],[1,4]]')
  // })
  // test('Case 4', t => {
  //   let intervals = [[1, 4], [1, 4]]
  //   let res = merge(intervals)
  //   assert.equal(res, [[1,4]], 'should be [[1,4]]')
  // })
  // test('Case 5', t => {
  //   let intervals = [[2,3],[4,5],[6,7],[8,9],[1,10]]
  //   let res = merge(intervals)
  //   assert.equal(res, [[1,10]], 'should be [[1,10]]')
  // })
  test('Case 6', t => { // 四个区间，两两不行，总体行
    let intervals = [[4,5],[2,4],[4,6],[3,4],[0,0],[1,1],[3,5],[2,2]]
    let res = merge(intervals)
    assert.equal(res, [[1,10]], 'should be [[1,10]]')
  })
}
