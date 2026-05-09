export default class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
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
}
