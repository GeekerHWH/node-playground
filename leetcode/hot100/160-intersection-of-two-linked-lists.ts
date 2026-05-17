import assert from 'node:assert/strict';
import { test } from 'node:test';
import ListNode from '../types/list-node.ts';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null && headB === null) {
    return null
  }
  let ptrA = headA, ptrB = headB
  while (ptrA !== ptrB) {
    if (ptrA === null) {
      ptrA = headB
    } else {
      ptrA = ptrA.next
    }
    if (ptrB === null) {
      ptrB = headA
    } else {
      ptrB = ptrB.next
    }
  }
  return ptrA
};

export default function testAll(): void {
  console.log("160-intersection-of-two-linked-lists")
  test('Case 1', t => {
    let intersectionPart = ListNode.FromArray([8,4,5])
    let [l1Head, l1Tail] = ListNode.FromArrayWithTail([4,1])
    let [l2Head, l2Tail] = ListNode.FromArrayWithTail([5, 6, 1])
    if (l1Tail === null) {
      t.assert.fail("l1Tail is null, check ListNode.FromArrayWithTail method correctness")
    } else {
      l1Tail.next = intersectionPart
    }
    if (l2Tail === null) {
      t.assert.fail("l1Tail is null, check ListNode.FromArrayWithTail method correctness")
    } else {
      l2Tail.next = intersectionPart
    }
    let res = getIntersectionNode(l1Head, l2Head)
    assert.deepStrictEqual(res!.val, 8, 'should be 8, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let intersectionPart = ListNode.FromArray([2,4])
    let [l1Head, l1Tail] = ListNode.FromArrayWithTail([1,9,1])
    let [l2Head, l2Tail] = ListNode.FromArrayWithTail([3])
    if (l1Tail === null) {
      t.assert.fail("l1Tail is null, check ListNode.FromArrayWithTail method correctness")
    } else {
      l1Tail.next = intersectionPart
    }
    if (l2Tail === null) {
      t.assert.fail("l1Tail is null, check ListNode.FromArrayWithTail method correctness")
    } else {
      l2Tail.next = intersectionPart
    }
    let res = getIntersectionNode(l1Head, l2Head)
    assert.deepStrictEqual(res!.val, 2, 'should be 2, but get '+ JSON.stringify(res))
  })
  test('Case 3', t => {
    let intersectionPart = ListNode.FromArray([])
    let [l1Head, l1Tail] = ListNode.FromArrayWithTail([2,6,4])
    let [l2Head, l2Tail] = ListNode.FromArrayWithTail([1,5])
    if (l1Tail === null) {
      t.assert.fail("l1Tail is null, check ListNode.FromArrayWithTail method correctness")
    } else {
      l1Tail.next = intersectionPart
    }
    if (l2Tail === null) {
      t.assert.fail("l1Tail is null, check ListNode.FromArrayWithTail method correctness")
    } else {
      l2Tail.next = intersectionPart
    }
    let res = getIntersectionNode(l1Head, l2Head)
    assert.deepStrictEqual(res, null, 'should be null cause no intersection, but get '+ JSON.stringify(res))
  })
}
