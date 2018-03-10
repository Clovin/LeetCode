/**
 * Created by Clovin on 11/03/2018.
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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      if (queue[i] !== null) {
        queue.push(queue[i].left)
        queue.push(queue[i].right)
      }
    }

    for (let i = 0; i < len / 2; i++) {
      if (queue[i] !== null && queue[len - i - 1] === null) {
        return false
      } else if (queue[i] === null && queue[len - i - 1] !== null) {
        return false
      } else if (queue[i] !== null && queue[len - i - 1] !== null && queue[i].val !== queue[len - i - 1].val) {
        return false
      }
    }

    for (let i = 0; i < len; i++) {
      queue.shift()
    }
  }

  return true
}
