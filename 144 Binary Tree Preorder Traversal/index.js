/**
 * Created by Clovin on 08/03/2018.
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
var preorderTraversal = function (root) {
  let result = []

  if (root === null) {
    return result
  }

  preTravel(root, result)

  return result
}

function preTravel (node, result) {
  if (node !== null) {
    result.push(node.val)

    preTravel(node.left, result)

    preTravel(node.right, result)
  }
}
