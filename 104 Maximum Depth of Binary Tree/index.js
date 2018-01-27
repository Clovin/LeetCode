/**
 * Created by Clovin on 27/01/2018.
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
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }

  let depth = 0
  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    ++depth
    for (let i = 0, n = queue.length; i < n; ++i) {
      let p = queue.shift()

      if (p.left !== null) {
        queue.push(p.left)
      }
      if (p.right !== null) {
        queue.push(p.right)
      }
    }
  }

  return depth
}
