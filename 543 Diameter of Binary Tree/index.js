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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  if (root === null) {
    return 0
  }

  let result = {
    cnt: 0
  }

  search(root, result)

  return result.cnt - 1
}

function search (node, result) {
  if (node === null) {
    return 0
  }

  let left = search(node.left, result)
  let right = search(node.right, result)
  let now = left + right + 1
  if (now > result.cnt) {
    result.cnt = now
  }
  return Math.max(left, right) + 1
}
