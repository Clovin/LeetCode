/**
 * Created by Clovin on 11/03/2018.
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let queue = []
  queue.push(root)

  let flag = false
  while (1) {
    let tempNode = queue.shift()

    if (p.val === tempNode.val) {
      if (p === tempNode) {
        return p
      }

      if (q.val < p.val) {
        if (tempNode.left.val === q.val) {
          return tempNode
        }

        queue.push(tempNode.left)
      } else if (q.val > p.val) {
        if (tempNode.right.val === q.val) {
          return tempNode
        }

        queue.push(tempNode.right)
      }
      continue
    } else if (q.val === tempNode.val) {
      if (q === tempNode) {
        return q
      }

      if (q.val < p.val) {
        if (tempNode.right.val === q.val) {
          return tempNode
        }

        queue.push(tempNode.right)
      } else if (q.val > p.val) {
        if (tempNode.left.val === q.val) {
          return tempNode
        }

        queue.push(tempNode.left)
      }
      continue
    }

    if (p.val < tempNode.val && q.val < tempNode.val) {
      queue.push(tempNode.left)
    } else if (p.val > tempNode.val && q.val > tempNode.val) {
      queue.push(tempNode.right)
    } else {
      return tempNode
    }
  }
}
