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
 * @return {boolean}
 */
var isBalanced = function (root) {
  let flag = {
    isBalanced: true
  }

  height(root, flag)

  return flag.isBalanced
}

function height (node, flag) {
  if (!flag.isBalanced) {
    return
  }

  if (node === null) {
    return 0
  }

  let left = height(node.left, flag)
  let right = height(node.right, flag)

  if (Math.abs(left - right) > 1) {
    flag.isBalanced = false
    return
  }

  return Math.max(left, right) + 1
}
