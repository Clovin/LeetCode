/**
 * Created by Clovin on 12/03/2018.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  let queue = []
  queue.push(s)

  while (queue.length !== 0) {
    let tempNode = queue.shift()
    if (tempNode === null) {
      continue
    }

    if (tempNode.val === t.val) {
      if (compare(tempNode, t) === true) {
        return true
      }
    }

    queue.push(tempNode.left)
    queue.push(tempNode.right)
  }

  return false
}

function compare (s, t) {
  let [queueS, queueT] = [[], []]
  queueS.push(s)
  queueT.push(t)

  while (queueS.length !== 0 && queueT.length !== 0) {
    let [tempS, tempT] = [queueS.shift(), queueT.shift()]
    if (tempS === null && tempT !== null) {
      return false
    } else if (tempS !== null && tempT === null) {
      return false
    }

    if (tempS === null && tempT === null) {
      continue
    }

    if (tempS.val !== tempT.val) {
      return false
    }

    queueS.push(tempS.left)
    queueT.push(tempT.left)
    queueS.push(tempS.right)
    queueT.push(tempT.right)
  }

  return queueT.length === 0
}
