/**
 * Created by Clovin on 07/02/2018.
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
var findSecondMinimumValue = function (root) {
  if (root === null || (root.left === null && root.right === null)) {
    return -1
  }

  let min = 9999999999
  let result = 9999999999

  let queue = []

  root.left !== null && queue.push(root.left)
  root.right !== null && queue.push(root.right)
  while (queue.length !== 0) {
    let temp = queue.shift()
    temp.left !== null && queue.push(temp.left)
    temp.right !== null && queue.push(temp.right)
    if (temp.val < min) {
      result = min
      min = temp.val
      continue
    }

    if (temp.val < result && temp.val > min) {
      result = temp.val
    }
  }

  return result === 9999999999 ? -1 : result
}
