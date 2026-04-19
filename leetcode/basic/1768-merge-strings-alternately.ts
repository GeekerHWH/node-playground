import assert from 'node:assert/strict';
import { test } from 'node:test';

function mergeAlternately(word1: string, word2: string): string {
  const buf: Array<string> = []
  let j: number = 0;
  for (let i = 0; i < word1.length; i++){
    buf.push(word1[i])
    if (word2[j]) {
      buf.push(word2[j])
      j++
    }
  }
  for (j; j < word2.length; j++){
    buf.push(word2[j])
  }
  return buf.join('')
};


export default function testAll(): void{
  test('Case 1', t => {
    let word1 = 'abc'
    let word2 = 'pqr'
    assert.equal(mergeAlternately(word1, word2), 'apbqcr', 'should be apbqcr')
  })
  test('Case 2', t => {
    let word1 = 'ab'
    let word2 = 'pqrs'
    assert.equal(mergeAlternately(word1, word2), 'apbqrs', 'should be apbqrs')
  })
  test('Case 3', t => {
    let word1 = 'abcd'
    let word2 = 'pq'
    assert.equal(mergeAlternately(word1, word2), 'apbqcd', 'should be apbqcd')
  })
}
