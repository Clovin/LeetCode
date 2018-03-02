/**
 * Created by Clovin on 02/03/2018.
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (root === null) {
    return []
  }

  let queue = []
  let result = []

  queue.push(root)
  while (queue.length !== 0) {
    let len = queue.length
    let nowRow = []
    for (let i = 0; i < len; i++) {
      let tempNode = queue.shift()
      nowRow.push(tempNode.val)

      tempNode.left !== null && queue.push(tempNode.left)
      tempNode.right !== null && queue.push(tempNode.right)
    }

    result.unshift(nowRow)
  }

  return result
}
