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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let queueP = []
  let queueQ = []

  if (p === null && q === null) {
    return true
  }

  if ((p !== null && q === null) || (p === null && q !== null)) {
    return false
  }

  queueP.push(p)
  queueQ.push(q)
  while (queueP.length !== 0) {
    let tempP = queueP.shift()
    let tempQ = queueQ.shift()

    if (tempP.val !== tempQ.val) {
      return false
    }

    if ((tempP.left !== null && tempQ.left === null) || (tempP.left === null && tempQ.left !== null)) {
      return false
    } else if (tempP.left !== null && tempQ.left !== null) {
      queueP.push(tempP.left)
      queueQ.push(tempQ.left)
    }

    if ((tempP.right !== null && tempQ.right === null) || (tempP.right === null && tempQ.right !== null)) {
      return false
    } else if (tempP.right !== null && tempQ.right !== null) {
      queueP.push(tempP.right)
      queueQ.push(tempQ.right)
    }
  }

  return true
}
