/**
 * Created by Clovin on 01/02/2018.
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
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let tempSet = new Set()

  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()

    if (tempSet.has(tempNode.val)) {
      return true
    }

    tempSet.add(k - tempNode.val)

    tempNode.left !== null && queue.push(tempNode.left)
    tempNode.right !== null && queue.push(tempNode.right)
  }

  return false
}
