/**
 * Created by Clovin on 08/03/2018.
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function (root, v, d) {
  if (d === 1) {
    let newNode = new TreeNode(v)
    newNode.left = root
    return newNode
  }

  let queue = []
  queue.push(root)
  let cnt = 1
  while (queue.length !== 0) {
    let len = queue.length
    let temp = []

    if (cnt++ === d - 1) {
      for (let i = 0; i < len; i++) {
        let tempNode = queue.shift()
        temp.push(tempNode)

        let newNode = new TreeNode(v)
        let tempLeft = tempNode.left
        tempNode.left = newNode
        newNode.left = tempLeft

        newNode = new TreeNode(v)
        let tempRight = tempNode.right
        tempNode.right = newNode
        newNode.right = tempRight
      }

      break
    }

    for (let i = 0; i < len; i++) {
      let tempNode = queue.shift()
      tempNode.left !== null && queue.push(tempNode.left)
      tempNode.right !== null && queue.push(tempNode.right)
    }
  }

  return root
}
