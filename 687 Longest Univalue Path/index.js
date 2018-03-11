/**
 * Created by Clovin on 11/03/2018.
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
var longestUnivaluePath = function (root) {
  if (root === null) {
    return 0
  }

  let result = 0
  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()
    if (tempNode === null) {
      continue
    }

    let temp = search(tempNode.left, tempNode.val) + search(tempNode.right, tempNode.val) + 1
    if (temp > result) {
      result = temp
    }

    queue.push(tempNode.left)
    queue.push(tempNode.right)
  }
  return result - 1
}

function search (node, now) {
  if (node === null || node.val !== now) {
    return 0
  }

  return Math.max(search(node.left, now), search(node.right, now)) + 1
}
