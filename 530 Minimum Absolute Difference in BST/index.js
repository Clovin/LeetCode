/**
 * Created by Clovin on 04/02/2018.
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
var getMinimumDifference = function (root) {
  let temp = []
  let queue = []

  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()

    temp.push(tempNode.val)

    tempNode.left !== null && queue.push(tempNode.left)
    tempNode.right !== null && queue.push(tempNode.right)
  }

  temp.sort((a, b) => a - b)

  let min = Math.abs(temp[1] - temp[0])
  for (let i = 2; i < temp.length; i++) {
    let tempMin = Math.abs(temp[i] - temp[i - 1])
    if (tempMin < min) {
      min = tempMin
    }
  }

  return min
}
