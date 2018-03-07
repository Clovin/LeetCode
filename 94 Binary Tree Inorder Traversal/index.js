/**
 * Created by Clovin on 07/03/2018.
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = []
  inorderTravel(root, result)
  return result
}

function inorderTravel (node, result) {
  if (node !== null) {
    inorderTravel(node.left, result)
    result.push(node.val)
    inorderTravel(node.right, result)
  }
}
