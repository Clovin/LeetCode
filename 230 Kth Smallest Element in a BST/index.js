/**
 * Created by Clovin on 10/03/2018.
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  if (root === null) {
    return 0
  }

  let result = []
  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()
    tempNode.left !== null && queue.push(tempNode.left)
    tempNode.right !== null && queue.push(tempNode.right)

    result.push(tempNode.val)

    if (result.length === k) {
      break
    }
  }

  result.sort((a, b) => a - b)

  while (queue.length !== 0) {
    let tempNode = queue.shift()

    if (tempNode.val < result[k - 1]) {
      result.splice(k - 1, 1)
      result.push(tempNode.val)
      result.sort((a, b) => a - b)

      tempNode.left !== null && queue.push(tempNode.left)
      tempNode.right !== null && queue.push(tempNode.right)
    } else if (tempNode.val > result[k - 1]) {
      tempNode.left !== null && queue.push(tempNode.left)
    }
  }

  return result[k - 1]
}

kthSmallest([3, 2, 4, 1]
  , 1)