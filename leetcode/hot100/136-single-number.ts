import assert from 'node:assert/strict';
import { test } from 'node:test';

function singleNumber(nums: number[]): number {
  let ans = 0;
  for (const num of nums) {
    ans ^= num
  }
  return ans
};

export default function testAll(): void {
  console.log("136-single-number")
  test('Case 1', t => {
    let res = singleNumber([2,2,1])
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = singleNumber([4,1,2,1,2])
    assert.deepStrictEqual(res, 4, 'should be 4, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = singleNumber([1])
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ JSON.stringify(res))
  })
}
