/**
 * Created by Clovin on 19/03/2018.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  // TODO: solve it
  if (root === null) {
    return 'null'
  }

  let queue = []
  let result = ''
  let isEmpty = false
  queue.push(root)
  while (!isEmpty && queue.length !== 0) {
    let len = queue.length
    isEmpty = true
    for (let i = 0; i < len; i++) {
      let tempNode = queue.shift()
      if (tempNode === null) {
        result += 'null,'
        queue.push(null)
        queue.push(null)
        continue
      }

      result += tempNode.val + ','

      if (tempNode.left !== null || tempNode.right !== null) {
        isEmpty = false
      }

      queue.push(tempNode.left)
      queue.push(tempNode.right)
    }
  }

  return result
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (data === 'null') {
    return null
  }

  let tempSplit = data.split(',')
  let root = new TreeNode(parseInt(tempSplit[0]))
  let prevLayer = [root]
  let len = 2
  let i = 1
  while (i < tempSplit.length - 1) {
    let end = i + len
    let tempPrevLayer = []
    while (i < end) {
      let tempNode = prevLayer.shift()
      if (tempNode === null) {
        tempPrevLayer.push(null)
        tempPrevLayer.push(null)
        i += 2
        continue
      }

      if (tempSplit[i] === 'null') {
        tempNode.left = null
        tempPrevLayer.push(null)
      } else {
        let left = new TreeNode(parseInt(tempSplit[i]))
        tempPrevLayer.push(left)
        tempNode.left = left
      }

      if (tempSplit[i + 1] === 'null') {
        tempNode.right = null
        tempPrevLayer.push(null)
      } else {
        let right = new TreeNode(parseInt(tempSplit[i + 1]))
        tempPrevLayer.push(right)
        tempNode.right = right
      }

      i += 2
    }

    len *= 2
    prevLayer = tempPrevLayer
  }

  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
