import assert from 'node:assert/strict';
import { test } from 'node:test';

function canJump(nums: number[]): boolean {
  let p = 0
  let step = nums[p]
  for (let i = p; i < p + step + 1; i++){
    if (i + nums[i] >= nums.length-1) {
      return true
    }
    if (i + nums[i] > p + step) {
      p = i
      step = nums[p]
    }
  }
  return false
};

export default function testAll(): void {
  console.log("55-jump-game")
  test('Case 1', t => {
    let res = canJump([2,3,1,1,4])
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = canJump([3,2,1,0,4])
    assert.deepStrictEqual(res, false, 'should be false, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = canJump([1,1,1,0])
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
}
