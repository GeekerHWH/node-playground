import assert from 'node:assert/strict';
import { test } from 'node:test';

function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1
  let res = (right-left) * Math.min(height[left], height[right])
  while (left < right) {
    if (height[left] > height[right]) {
      right--
    } else {
      left++
    }
    res = Math.max(res, (right-left) * Math.min(height[left], height[right]))
  }
  return res
};

export default function testAll(): void {
  console.log("11-container-with-most-water")
  let toBeTestedFn = maxArea
  test('Case 1', t => {
    let res = toBeTestedFn([1,8,6,2,5,4,8,3,7])
    assert.deepStrictEqual(res, 49, 'should be 49, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = toBeTestedFn([1,1])
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ JSON.stringify(res))
  })
}
