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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let result = []

  if (root === null) {
    return result
  }

  search(root, root.val.toString(), result)

  return result
}

function search (node, str, result) {
  if (node.left === null && node.right === null) {
    result.push(str)
    return
  }

  if (node.left !== null) {
    search(node.left, str + '->' + node.left.val, result)
  }

  if (node.right !== null) {
    search(node.right, str + '->' + node.right.val, result)
  }
}