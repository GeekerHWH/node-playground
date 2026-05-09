import assert from 'node:assert/strict';
import { test } from 'node:test';
import TreeNode from '../types/binary-tree-node.ts';

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return []
  }
  if (root.left === null && root.right === null) {
    return [root.val]
  }
  return inorderTraversal(root.left).concat([root.val]).concat(inorderTraversal(root.right))
};

export default function testAll(): void {
  test('Case 4', t => {
    let tree = TreeNode.buildCompleteBinaryTree([1, 2, 3, 4, 5])
    let res = inorderTraversal(tree)
    assert.deepStrictEqual(res, [4,2,5,1,3], 'should be [4,2,5,1,3], but get '+ JSON.stringify(res))
  })
  test('Case 5', t => {
    let tree = TreeNode.buildCompleteBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9])
    let res = inorderTraversal(tree)
    assert.deepStrictEqual(res, [8,4,9,2,5,1,6,3,7], 'should be [8,4,9,2,5,1,6,3,7], but get '+ JSON.stringify(res))
  })
  test('Case 6', t => {
    let tree = TreeNode.buildCompleteBinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18])
    let res = inorderTraversal(tree)
    assert.deepStrictEqual(res, [16,8,17,4,18,9,2,10,5,11,1,12,6,13,3,14,7,15], 'should be [16,8,17,4,18,9,2,10,5,11,1,12,6,13,3,14,7,15], but get '+ JSON.stringify(res))
  })
  test('Case 7', t => {
    let tree = TreeNode.buildCompleteBinaryTree([1])
    let res = inorderTraversal(tree)
    assert.deepStrictEqual(res, [1], 'should be [1], but get '+ JSON.stringify(res))
  })
}
