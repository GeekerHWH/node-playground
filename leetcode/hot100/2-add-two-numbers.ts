import assert from 'node:assert/strict';
import { test } from 'node:test';
import ListNode from '../types/list-node.ts';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let head = null, tail = null
  let carry = 0
  while (l1 || l2) {
    let x = l1 ? l1.val : 0
    let y = l2 ? l2.val : 0
    let curVal = (x + y + carry) % 10
    carry = Math.floor((x + y + carry) / 10)
    if (!head) {
      head = tail = new ListNode(curVal)
    } else {
      tail.next = new ListNode(curVal)
      tail = tail!.next
    }
    l1 = l1 ? l1.next : null
    l2 = l2 ? l2.next : null
  }
  if (carry > 0) {
    tail.next = new ListNode(carry)
  }
  return head
};

export default function testAll(): void {
  test('Case 1', t => {
    let l1 = ListNode.FromArray([2,4,3])
    // let l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
    let l2 = ListNode.FromArray([5,6,4])
    // let l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
    let res = ListNode.toArray(addTwoNumbers(l1, l2))
    assert.deepStrictEqual(res, [7,0,8], 'should be [7,0,8], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let l1 = new ListNode(0)
    let l2 = new ListNode(0)
    let res = ListNode.toArray(addTwoNumbers(l1, l2))
    assert.deepStrictEqual(res, [0], 'should be [0], but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let l1 = ListNode.FromArray([9,9,9,9,9,9,9])
    let l2 = ListNode.FromArray([9,9,9,9])
    let res = ListNode.toArray(addTwoNumbers(l1, l2))
    assert.deepStrictEqual(res, [8,9,9,9,0,0,0,1], 'should be [8,9,9,9,0,0,0,1], but get '+ JSON.stringify(res))
  })
}
