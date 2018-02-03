/**
 * Created by Clovin on 03/02/2018.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let queue = []

  if (root === null) {
    return 0
  }

  let result = 0
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()

    if (tempNode.left !== null) {
      queue.push(tempNode.left)
      if (tempNode.left.left === null && tempNode.left.right === null) {
        result += tempNode.left.val
      }
    }

    tempNode.right !== null && queue.push(tempNode.right)
  }

  return result
}
