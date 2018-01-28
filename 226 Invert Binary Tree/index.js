/**
 * Created by Clovin on 28/01/2018.
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
var invertTree = function (root) {
  let queue = []

  queue.push(root)
  while (queue.length !== 0) {
    let nowNode = queue.shift()

    if (nowNode === null) {
      continue
    }

    let tempNode = nowNode.right
    nowNode.right = nowNode.left
    nowNode.left = tempNode

    queue.push(nowNode.left)
    queue.push(nowNode.right)
  }

  return root
}
