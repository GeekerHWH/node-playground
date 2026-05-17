export default class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }

  BFS(): Array<number|null>{
    if (this === null) {
      return []
    }
    const ans: Array<number|null> = []
    let q: Array<TreeNode|null> = [this]
    while (q.length !== 0) {
      let nextQ: Array<TreeNode|null> = []
      while (q.length !== 0) {
        let node = q.splice(0,1)[0]
        if (node !== null) {
          ans.push(node.val)
        } else {
          ans.push(null)
        }

        if (node !== null) {
          if (node.left === null && node.right === null) {
            continue
          }
          nextQ.push(node.left)
          nextQ.push(node.right)
        }
      }
      q = nextQ
    }
    return ans
  }

  static inorderTraversal(root: TreeNode | null): number[] {
    if (root === null) {
      return []
    }
    if (root.left === null && root.right === null) {
      return [root.val]
    }
    return this.inorderTraversal(root.left).concat([root.val]).concat(this.inorderTraversal(root.right))
  };

  // build complete binary tree by popping array as BFS order, array performs as FIFO queue
  static buildCompleteBinaryTree(array: number[] | null): TreeNode | null{
    if (array === null) {
      return null
    }
    if (array.length === 0) {
      return null
    }
    let root = new TreeNode(array[0])
    array.splice(0,1) // queue pop

    let left = true
    let nodeQueue: TreeNode[] = [root] // records node of precedent level
    let nextQ: TreeNode[] = []
    while (nodeQueue.length !== 0) {
      let nodeQueueLengthSnapshot = nodeQueue.length
      let parent = nodeQueue[0]
      nodeQueue.splice(0,1)
      while (array.length !== 0 && nextQ.length < nodeQueueLengthSnapshot * 2) {
        if (left) {
          parent.left = new TreeNode(array[0])
          array.splice(0, 1)
          nextQ.push(parent.left)
          left = false
        } else {
          parent.right = new TreeNode(array[0])
          array.splice(0, 1)
          nextQ.push(parent.right)
          left = true
          if (nodeQueue.length > 0) {
            parent = nodeQueue[0]
            nodeQueue.splice(0,1)
          }
        }
      }
      nodeQueue = nextQ
      nextQ = []
    }
    return root
  }

  // refer to 108-convert-sorted-array-to-binary-search-tree.ts
  static sortedArrayToBST(nums: number[]): TreeNode | null {
    if (nums.length === 0) {
      return null
    }
    let mid = (nums.length - 1) >> 1
    let root = new TreeNode(nums[mid])
    root.left = this.sortedArrayToBST(nums.slice(0, mid))
    root.right = this.sortedArrayToBST(nums.slice(mid + 1, nums.length))
    return root
  };
}
