import assert from 'node:assert/strict';
import { test } from 'node:test';

function findClosestElements(arr: number[], k: number, x: number): number[] {
  let idxOfX = lowerBound(arr, x)
  let leftNum = 0, rightNum = 0
  while (leftNum + rightNum < k) {
    let a, b: number | undefined
    if (idxOfX - leftNum - 1 >= 0) {
      a = arr[idxOfX - leftNum - 1]
    }
    if (idxOfX + rightNum  < arr.length) {
      b = arr[idxOfX + rightNum ]
    }
    if (!a && a !== 0) {
      rightNum++
      continue
    }
    if (!b && b !== 0) {
      leftNum++
      continue
    }

    if (Math.abs(x - a!) < Math.abs(x - b!) || (Math.abs(x - a!) === Math.abs(x - b!) && a! < b!)) {
      leftNum++
    } else {
      rightNum++
    }
  }
  return arr.slice(idxOfX-leftNum, idxOfX-leftNum+k)
};

function lowerBound(arr: number[], target: number): number{
  let left = 0, right = arr.length - 1
  while (left <= right) {
    let mid = ((right - left) >> 1) + left
    if (target <= arr[mid]) {
      right = mid-1
    } else {
      left = mid+1
    }
  }
  return left
}

export default function testAll(): void {
  console.log("658-find-k-closest-elements")
  test('Case 1', t => {
    let arr = [1, 2, 3, 4, 5], k = 4, x = 3
    let res = findClosestElements(arr, k, x)
    assert.deepStrictEqual(res, [1,2,3,4], 'should be [1,2,3,4], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let arr = [1,1,2,3,4,5], k = 4, x = -1
    let res = findClosestElements(arr, k, x)
    assert.deepStrictEqual(res, [1,1,2,3], 'should be [1,1,2,3], but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let arr = [1,1,1,10,10,10], k = 1, x = 9
    let res = findClosestElements(arr, k, x)
    assert.deepStrictEqual(res, [10], 'should be [10], but get '+ JSON.stringify(res))
  })
  test('Case 4', t => {
    let arr = [0,1,1,1,2,3,6,7,8,9], k = 9, x = 4
    let res = findClosestElements(arr, k, x)
    assert.deepStrictEqual(res, [0,1,1,1,2,3,6,7,8], 'should be [0,1,1,1,2,3,6,7,8], but get '+ JSON.stringify(res))
  })
}
