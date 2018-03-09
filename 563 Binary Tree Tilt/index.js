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
var findTilt = function (root) {
  alterTree(root)
  return countTilt(root)
}

function countTilt (node) {
  if (node === null) {
    return 0
  }

  return Math.abs((node.left === null ? 0 : node.left.val) - (node.right === null ? 0 : node.right.val)) + countTilt(node.left) + countTilt(node.right)
}

function alterTree (root) {
  if (root === null) {
    return 0
  }

  root.val = alterTree(root.left) + alterTree(root.right) + root.val
  return root.val
}
