import assert from 'node:assert/strict';
import { test } from 'node:test';

// https://leetcode.cn/problems/boats-to-save-people/
function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b)
  let i = 0, j = people.length - 1, parallelBoats = 0
  while (i < j) {
    if (people[i] + people[j] <= limit) {
      parallelBoats++
      i++
      j--
    } else {
      j--
    }
  }
  return people.length-parallelBoats
};

export default function testAll(): void {
  console.log("881-boats-to-save-people")
  let toBeTestedFn = numRescueBoats
  test('Case 1', t => {
    let people = [1,2], limit = 3
    let res = toBeTestedFn(people, limit)
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let people = [3,2,2,1], limit = 3
    let res = toBeTestedFn(people, limit)
    assert.deepStrictEqual(res, 3, 'should be 3, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let people = [3,5,3,4], limit = 5
    let res = toBeTestedFn(people, limit)
    assert.deepStrictEqual(res, 4, 'should be 4, but get '+ JSON.stringify(res))
  })
}
