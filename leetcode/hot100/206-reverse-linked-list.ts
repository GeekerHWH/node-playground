import assert from 'node:assert/strict';
import { test } from 'node:test';
import ListNode from '../types/list-node.ts';

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }
  let prev: ListNode|null = null
  while (head !== null) {
    let temp: ListNode|null = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
};

export default function testAll(): void {
  console.log("206-reverse-linked-list")
  let toBeTestedFn = reverseList
  test('Case 1', t => {
    let head = ListNode.FromArray([1,2,3,4,5])
    let res = ListNode.toArray(toBeTestedFn(head))
    assert.deepStrictEqual(res, [5,4,3,2,1], 'should be [5,4,3,2,1], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let head = ListNode.FromArray([1,2])
    let res = ListNode.toArray(toBeTestedFn(head))
    assert.deepStrictEqual(res, [2,1], 'should be [2,1], but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let head = ListNode.FromArray([])
    let res = ListNode.toArray(toBeTestedFn(head))
    assert.deepStrictEqual(res, [], 'should be [], but get '+ JSON.stringify(res))
  })
}
