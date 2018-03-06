/**
 * Created by Clovin on 06/03/2018.
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
var largestValues = function (root) {
  if (root === null) {
    return []
  }

  let result = []
  let queue = []

  queue.push(root)
  while (queue.length !== 0) {
    let len = queue.length

    let maxValue = queue[0].val
    for (let i = 0; i < len; i++) {
      let tempNode = queue.shift()

      if (tempNode.val > maxValue) {
        maxValue = tempNode.val
      }

      tempNode.left && queue.push(tempNode.left)
      tempNode.right && queue.push(tempNode.right)
    }

    result.push(maxValue)
  }

  return result
}
