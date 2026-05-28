import assert from 'node:assert/strict';
import { test } from 'node:test';
import ListNode from '../types/list-node.ts';

function isPalindrome(head: ListNode | null): boolean {
  if (head === null) {
    return true
  }

  let mid = head.findMiddle()
  if (mid === null) {
    return false
  }

  let tail = ListNode.reverseList(mid.next)
  if (tail === null) {
    return true
  }

  // checking palindrome property.
  // note that this is not semantically equal to ListNode.valueEqual,
  // it ignore the middle node in odd number of nodes scenario
  let l1: ListNode | null = head, l2: ListNode | null = tail
  while (l2 !== null) {
    if (l1!.val !== l2.val) {
      return false
    }
    l1 = l1!.next
    l2 = l2.next
  }
  return true
};

export default function testAll(): void {
  console.log("234-palindrome-linked-list")
  let toBeTestedFn = isPalindrome
  test('Case 1', t => {
    let list = ListNode.FromArray([1,2,2,1])
    let res = toBeTestedFn(list)
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let list = ListNode.FromArray([1,2])
    let res = toBeTestedFn(list)
    assert.deepStrictEqual(res, false, 'should be false, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let list = ListNode.FromArray([1])
    let res = toBeTestedFn(list)
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
  test('Case 4', t => {
    let list = ListNode.FromArray([1,0,1])
    let res = toBeTestedFn(list)
    assert.deepStrictEqual(res, true, 'should be true, but get '+ JSON.stringify(res))
  })
}
