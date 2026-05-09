import assert from 'node:assert/strict';
import { test } from 'node:test';
import ListNode from '../types/list-node.ts';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) {
    return null
  }
  let ptr: ListNode | null = head
  let prionier: ListNode | null = head
  // prionier go N step first
  while (n>0){
    prionier = prionier!.next
    n--
  }
  if (prionier === null) {
    return ptr.next
  }
  // once prionier.next reach null, ptr point to the one before node to delete
  while (prionier!==null && prionier!.next !== null) {
    ptr = ptr!.next
    prionier = prionier!.next
  }
  let toDeleteNode = ptr!.next
  ptr!.next = toDeleteNode!.next
  return head
};

export default function testAll(): void {
  test('Case 1', t => {
    let input = ListNode.FromArray([1,2,3,4,5])
    let res = ListNode.toArray(removeNthFromEnd(input, 2))
    assert.deepStrictEqual(res, [1,2,3,5], 'should be [1,2,3,5], but get ' + JSON.stringify(res))
  })
  test('Case 2', t => {
    let input = ListNode.FromArray([1])
    let res = ListNode.toArray(removeNthFromEnd(input, 1))
    assert.deepStrictEqual(res, [], 'should be [], but get ' + JSON.stringify(res))
  })
  test('Case 3', t => {
    let input = ListNode.FromArray([1,2])
    let res = ListNode.toArray(removeNthFromEnd(input, 1))
    assert.deepStrictEqual(res, [1], 'should be [1], but get ' + JSON.stringify(res))
  })
  test('Case 4', t => {
    let input = ListNode.FromArray([1,2])
    let res = ListNode.toArray(removeNthFromEnd(input, 2))
    assert.deepStrictEqual(res, [2], 'should be [2], but get ' + JSON.stringify(res))
  })
}
