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
 * @return {number[]}
 */
var findMode = function (root) {
  let queue = []
  let tempMap = new Map()
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()
    if (tempNode === null) {
      continue
    }

    if (tempMap.has(tempNode.val)) {
      tempMap.set(tempNode.val, tempMap.get(tempNode.val) + 1)
    } else {
      tempMap.set(tempNode.val, 1)
    }

    queue.push(tempNode.left)
    queue.push(tempNode.right)
  }

  let max = 0
  let result = []
  for (let [key, value] of tempMap.entries()) {
    if (value > max) {
      max = value
      result = [key]
    } else if (value === max) {
      result.push(key)
    }
  }

  return result
}
