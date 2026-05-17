import assert from 'node:assert/strict';
import { test } from 'node:test';
import TreeNode from '../types/binary-tree-node.ts';

function sortedArrayToBST(nums: number[]): TreeNode | null {
    return TreeNode.sortedArrayToBST(nums)
};

export default function testAll(): void {
  console.log("108-convert-sorted-array-to-binary-search-tree")
  test('Case 1', t => {
    let root = sortedArrayToBST([-10,-3,0,5,9])
    let res = root!.BFS()
    assert.deepStrictEqual(res, [0,-10,5,null,-3,null,9] , 'should be [0,-10,5,null,-3,null,9] , but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let root = sortedArrayToBST([1,3])
    let res = root!.BFS()
    assert.deepStrictEqual(res, [1, null, 3] , 'should be [1, null, 3] , but get '+ JSON.stringify(res))
  })
}
