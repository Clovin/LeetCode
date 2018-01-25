/**
 * Created by Clovin on 26/01/2018.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}


/**
 * @param {number[]} nums
 * @return {TreeNode}
 **/
function generateTree (nums) {
  if (nums.length === 0) {
    return null
  }

  // get max number and its index
  let maxNum = nums[0]
  let maxNumIndex = 0
  nums.forEach((num, index) => {
    if (num > maxNum) {
      maxNum = num
      maxNumIndex = index
    }
  })

  let newNode = new TreeNode(maxNum)
  newNode.left = generateTree(nums.slice(0, maxNumIndex))
  newNode.right = generateTree(nums.slice(maxNumIndex + 1))

  return newNode
}

/**
 * @param {TreeNode} TreeNode
 * @return {number}
 **/
function walkTree (treeNode) {
  if (!treeNode) {
    return
  }
  let queue = [treeNode]
  let array = []

  while (queue.length) {
    let cur = queue.shift()
    if (cur) {
      array.push(cur.val)
      if (cur.left || cur.right) {
        queue.push(cur.left)
        queue.push(cur.right)
      }
    } else {
      array.push(null)
    }
  }

  return array
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let tree = generateTree(nums)
  return walkTree(tree)
}

// console.log(constructMaximumBinaryTree([3, 2, 1, 6, 0, 5]))