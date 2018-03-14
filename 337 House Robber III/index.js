/**
 * Created by Clovin on 15/03/2018.
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
var rob = function (root) {
  let result = dfs(root)

  return result[0] > result[1] ? result[0] : result[1]
}

function dfs (node) {
  if (node === null) {
    return [0, 0]
  }

  let left = dfs(node.left)
  let right = dfs(node.right)

  let stole = left[1] + right[1] + node.val
  let nonStole = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

  return [stole, nonStole]
}