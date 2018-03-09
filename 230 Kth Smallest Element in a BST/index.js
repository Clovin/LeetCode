/**
 * Created by Clovin on 10/03/2018.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let queue = []
  while (root !== null) {
    queue.unshift(root)
    root = root.left
  }

  while (queue.length !== 0) {
    let tempNode = queue.shift()
    k--
    if (k === 0) {
      return tempNode.val
    }

    if (tempNode.right !== null) {
      tempNode = tempNode.right
      while (tempNode !== null) {
        queue.unshift(tempNode)
        tempNode = tempNode.left
      }
    }
  }
}
