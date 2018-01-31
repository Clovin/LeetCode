/**
 * Created by Clovin on 31/01/2018.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  let queue1 = []
  let queue2 = []

  if (t2 === null) {
    return t1
  }

  if (t1 === null) {
    return t2
  }

  queue1.push(t1)
  queue2.push(t2)

  while (queue1.length !== 0) {
    let temp1 = queue1.shift()
    let temp2 = queue2.shift()

    temp1.val += temp2.val

    if (temp1.left !== null && temp2.left !== null) {
      queue1.push(temp1.left)
      queue2.push(temp2.left)
    } else if (temp2.left !== null) {
      temp1.left = temp2.left
    }

    if (temp1.right !== null && temp2.right !== null) {
      queue1.push(temp1.right)
      queue2.push(temp2.right)
    } else if (temp2.right !== null) {
      temp1.right = temp2.right
    }
  }

  return t1
}
