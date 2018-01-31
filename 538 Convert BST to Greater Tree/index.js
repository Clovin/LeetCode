/**
 * Created by Clovin on 01/02/2018.
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
  let temp = []

  if (root === null) {
    return root
  }

  let queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()
    temp.push(tempNode.val)

    tempNode.left !== null && queue.push(tempNode.left)
    tempNode.right !== null && queue.push(tempNode.right)
  }

  temp.sort((a, b) => parseInt(b) - parseInt(a))

  queue = []
  queue.push(root)
  while (queue.length !== 0) {
    let tempNode = queue.shift()
    let tempVal = tempNode.val
    for (let i = 0; i < temp.length; i++) {
      if (tempVal >= temp[i]) {
        break
      }

      tempNode.val += temp[i]
    }

    tempNode.left !== null && queue.push(tempNode.left)
    tempNode.right !== null && queue.push(tempNode.right)
  }

  return root
}