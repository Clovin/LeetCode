/**
 * Created by Clovin on 17/03/2018.
 */
/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function (root) {
  this.stash = []
  while (root !== null) {
    this.stash.push(root)
    root = root.left
  }
}


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function () {
  return this.stash.length !== 0
}

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function () {
  let tempNode = this.stash.pop()
  let node = tempNode.right
  while (node !== null) {
    this.stash.push(node)
    node = node.left
  }
  return tempNode.val
}

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */
