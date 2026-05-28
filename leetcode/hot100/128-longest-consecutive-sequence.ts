import assert from 'node:assert/strict';
import { test } from 'node:test';

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums) // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  let res = 0, half = nums.length>>1
  for (const num of set.keys()) {
    if (!set.has(num - 1)) {
      let numOfConsecetive = 0
      for (let x = num; set.has(x); x++){
        numOfConsecetive++
      }
      if (numOfConsecetive > res) {
        res = numOfConsecetive
      }
    }
    if (res > half) {
      break
    }
  }
  return res
};

export default function testAll(): void {
  console.log("128-longest-consecutive-sequence")
  let toBeTestedFn = longestConsecutive
  test('Case 1', t => {
    let res = toBeTestedFn([100,4,200,1,3,2])
    assert.deepStrictEqual(res, 4, 'should be 4, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let res = toBeTestedFn([0,3,7,2,5,8,4,6,0,1])
    assert.deepStrictEqual(res, 9, 'should be 9, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let res = toBeTestedFn([1,0,1,2])
    assert.deepStrictEqual(res, 3, 'should be 3, but get '+ JSON.stringify(res))
  })
}
