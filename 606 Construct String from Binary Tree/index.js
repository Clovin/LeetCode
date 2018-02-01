/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
  let queue = []
  let result = ''

  queue.push(t)
  while (queue.length !== 0) {
    let temp = queue.shift()

    if (temp === ')') {
      result += ')'
      continue
    }

    if (temp === null) {
      result += '()'
      continue
    }

    result += `(${temp.val}`

    if (temp.right !== null || temp.left !== null) {
      queue.unshift(')')
      queue.unshift(temp.right)
      queue.unshift(temp.left)
    } else {
      result += ')'
    }
  }

  return result.substr(1, result.length - 2).replace(/\(\)\)/g, ')').replace(/\(\)$/, '')
}
