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
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (root === null) {
    return false
  }

  if (root.left === null && root.right === null) {
    return root.val === sum
  } else if (root.left === null) {
    return search(root.right, sum - root.val)
  } else if (root.right === null) {
    return search(root.left, sum - root.val)
  } else {
    return search(root.left, sum - root.val) || search(root.right, sum - root.val)
  }
}

function search (node, sum) {
  if (node === null) {
    return false
  }

  if (node.left === null && node.right === null) {
    return sum === node.val
  }

  return search(node.left, sum - node.val) || search(node.right, sum - node.val)
}
