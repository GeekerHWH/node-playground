import assert from 'node:assert/strict';
import { test } from 'node:test';
import TreeNode from '../types/binary-tree-node.ts';

function kthSmallest(root: TreeNode | null, k: number): number {
  let dfs = (node: TreeNode | null):number =>  {
    if (node == null) {
      return -1
    }
    let leftRes = dfs(node.left)
    if (leftRes !== -1) {
      return leftRes
    }
    k--
    if (k === 0) {
      return node.val
    }
    return dfs(node.right)
  }
  return dfs(root)
};

function kthSmallestNormal(root: TreeNode | null, k: number): number {
  let record: number[] = []
  let dfs = (node: TreeNode | null) => {
    if (node == null) {
      return
    }
    dfs(node.left)
    record.push(node.val)
    if (record.length === k) {
      return
    }
    dfs(node.right)
  }
  dfs(root)
  return record[k-1]
};

export default function testAll(): void {
  console.log("230-kth-smallest-element-in-a-bst")
  test('Case 1', t => {
    let root = new TreeNode(3,
      new TreeNode(1, null, new TreeNode(2)),
      new TreeNode(4)
    )
    let res = kthSmallestNormal(root, 1)
    assert.deepStrictEqual(res, 1, 'should be 1, but get ' + JSON.stringify(res))
    res = kthSmallest(root, 1)
    assert.deepStrictEqual(res, 1, 'should be 1, but get '+ JSON.stringify(res))
  })
  test('Case 2', t => {
    let root = new TreeNode(5,
      new TreeNode(3,
        new TreeNode(2,
          new TreeNode(1)
        ),
        new TreeNode(4)),
      new TreeNode(6)
    )
    let res = kthSmallestNormal(root, 3)
    assert.deepStrictEqual(res, 3, 'should be 3, but get ' + JSON.stringify(res))
    res = kthSmallest(root, 3)
    assert.deepStrictEqual(res, 3, 'should be 3, but get '+ JSON.stringify(res))
  })
}
