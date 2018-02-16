/**
 * Created by Clovin on 16/02/2018.
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
var minDiffInBST = function (root) {
  let tempArr = []
  let queue = []

  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()

    tempArr.push(tempNode.val)

    tempNode.left !== null && queue.push(tempNode.left)
    tempNode.right !== null && queue.push(tempNode.right)
  }

  tempArr.sort((a, b) => a - b)

  let result = tempArr[tempArr.length - 1]
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] - tempArr[i - 1] < result) {
      result = tempArr[i] - tempArr[i - 1]
    }
  }

  return result
}
