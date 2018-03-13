/**
 * Created by Clovin on 13/03/2018.
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
var findFrequentTreeSum = function (root) {
  let sumMap = new Map()

  search(root, sumMap)

  let max = 0
  let result = []
  for (let [key, value] of sumMap.entries()) {
    if (value > max) {
      max = value
      result = [key]
      continue
    }

    if (value === max) {
      result.push(key)
    }
  }

  return result
}

function search (node, sumMap) {
  if (node === null) {
    return 0
  }

  let temp = search(node.left, sumMap) + search(node.right, sumMap) + node.val
  if (sumMap.has(temp)) {
    sumMap.set(temp, sumMap.get(temp) + 1)
  } else {
    sumMap.set(temp, 1)
  }

  return temp
}
