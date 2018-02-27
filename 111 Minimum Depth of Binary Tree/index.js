/**
 * Created by Clovin on 28/02/2018.
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
var minDepth = function (root) {
  if (root === null) {
    return 0
  }

  let queue = []
  queue.push(root)

  let depth = 0
  while (queue.length !== 0) {
    let num = queue.length
    depth++

    for (let i = 0; i < num; i++) {
      let tempNode = queue.shift()

      if (tempNode.left === null && tempNode.right === null) {
        return depth
      }

      tempNode.left !== null && queue.push(tempNode.left)
      tempNode.right !== null && queue.push(tempNode.right)
    }
  }
}
