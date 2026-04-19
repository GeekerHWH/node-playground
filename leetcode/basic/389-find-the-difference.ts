import assert from 'node:assert/strict';
import { test } from 'node:test';

function findTheDifference(s: string, t: string): string {
  const mapS = new Map<string, number>()
  for (let i = 0; i < s.length; i++){
    mapS.get(s[i]) === undefined ? mapS.set(s[i], 1) : mapS.set(s[i], mapS.get(s[i])! + 1)
  }
  const mapT = new Map<string, number>()
  for (let i = 0; i < t.length; i++){
    mapT.get(t[i]) === undefined ? mapT.set(t[i], 1) : mapT.set(t[i], mapT.get(t[i])! + 1)
  }
  let res = ''
  mapT.forEach((val, key) => {
    if (mapS.get(key) !== val) {
      res = key
    }
  })
  return res
};

export default function testAll(): void{
  test('Case 1', t => {
    let word1 = 'abcd'
    let word2 = 'abcde'
    assert.equal(findTheDifference(word1, word2), 'e', 'should be e')
  })
  test('Case 2', t => {
    let word1 = ''
    let word2 = 'y'
    assert.equal(findTheDifference(word1, word2), 'y', 'should be y')
  })
  test('Case 3', t => {
    let word1 = 'a'
    let word2 = 'aa'
    assert.equal(findTheDifference(word1, word2), 'a', 'should be a')
  })
}
