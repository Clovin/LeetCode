/**
 * Created by Clovin on 29/01/2018.
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
var averageOfLevels = function (root) {
  let queue = []
  let result = []

  if (root === null) {
    return result
  }

  queue.push(root)
  while (queue.length !== 0) {
    let sum = 0
    let tempNode

    let i = 0
    let cnt = queue.length
    for (; i < cnt; i++) {
      tempNode = queue.shift()

      sum += tempNode.val

      tempNode.left !== null && queue.push(tempNode.left)
      tempNode.right !== null && queue.push(tempNode.right)
    }

    result.push(sum / cnt)
  }

  return result
}
