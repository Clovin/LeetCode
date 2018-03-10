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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  let result = {
    cnt: 0
  }

  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()

    if (tempNode === null) {
      continue
    }

    search(tempNode, sum, sum, result)

    queue.push(tempNode.left)
    queue.push(tempNode.right)
  }

  return result.cnt
}

function search (root, sum, now, result) {
  if (root === null) {
    return
  }

  if (now === root.val) {
    result.cnt++
  }
  search(root.left, sum, now - root.val, result)
  search(root.right, sum, now - root.val, result)
}
