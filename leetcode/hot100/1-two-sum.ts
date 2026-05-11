import assert from 'node:assert/strict';
import { test } from 'node:test';

function twoSum(nums: number[], target: number): number[] {
  let map = new Map()
  for (const [idx, val] of nums.entries()) {
    if (map.has(target - val)) {
      return [map.get(target - val), idx]
    }
    map.set(val, idx)
  }
  return []
};

export default function testAll(): void {
  console.log("1-two-sum")
  test('Case 1', t => {
    let res = twoSum([2,7,11,15],9)
    assert.deepStrictEqual(res, [0, 1], 'should be [0, 1], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = twoSum([3,2,4],6)
    assert.deepStrictEqual(res, [1,2], 'should be [1,2], but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = twoSum([3,3],6)
    assert.deepStrictEqual(res, [0, 1], 'should be [0, 1], but get '+ JSON.stringify(res))
  })
}
