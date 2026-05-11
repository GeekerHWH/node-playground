import assert from 'node:assert/strict';
import { test } from 'node:test';
import ListNode from '../types/list-node.ts';

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (list1 === null && list2 === null) {
    return null
  }
  let dummy = new ListNode(0), ptr: ListNode|null = dummy
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      ptr.next = list1
      list1 = list1.next
    } else {
      ptr.next = list2
      list2 = list2.next
    }
    ptr = ptr.next
  }
  if (list1 !== null) {
    ptr.next = list1
  }
  if (list2 !== null) {
    ptr.next = list2
  }
  return dummy.next
};

export default function testAll(): void {
  console.log("21-merge-two-sorted-lists")
  test('Case 1', t => {
    let l1 = ListNode.FromArray([1,2,4])
    let l2 = ListNode.FromArray([1,3,4])
    let res = ListNode.toArray(mergeTwoLists(l1, l2))
    assert.deepStrictEqual(res, [1,1,2,3,4,4], 'should be [1,1,2,3,4,4], but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let l1 = ListNode.FromArray([])
    let l2 = ListNode.FromArray([])
    let res = ListNode.toArray(mergeTwoLists(l1, l2))
    assert.deepStrictEqual(res, [], 'should be [], but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let l1 = ListNode.FromArray([])
    let l2 = ListNode.FromArray([0])
    let res = ListNode.toArray(mergeTwoLists(l1, l2))
    assert.deepStrictEqual(res, [0], 'should be [0], but get '+ JSON.stringify(res))
  })
}
