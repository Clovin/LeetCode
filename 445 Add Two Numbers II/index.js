/**
 * Created by Clovin on 08/03/2018.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let queue1 = []
  let queue2 = []

  queue1.push(l1.val)
  while (l1.next !== null) {
    l1 = l1.next
    queue1.unshift(l1.val)
  }

  queue2.push(l2.val)
  while (l2.next !== null) {
    l2 = l2.next
    queue2.unshift(l2.val)
  }

  if (queue2.length > queue1.length) {
    let temp = queue1
    queue1 = queue2
    queue2 = temp
  }

  for (let i = 0; i < queue2.length; i++) {
    queue1[i] += queue2[i]
    if (queue1[i] >= 10) {
      queue1[i] -= 10
      if (i + 1 < queue1.length) {
        queue1[i + 1] += 1
      } else {
        queue1[i + 1] = 1
      }
    }
  }

  let i = queue2.length
  while (queue1[i] >= 10) {
    if (queue1[i] >= 10) {
      queue1[i] -= 10
      if (i + 1 < queue1.length) {
        queue1[i + 1] += 1
      } else {
        queue1[i + 1] = 1
      }
      i++
    } else {
      break
    }
  }

  let newNode = new ListNode(queue1.pop())
  let nextNode = newNode
  while (queue1.length !== 0) {
    let tempNode = new ListNode(queue1.pop())
    nextNode.next = tempNode
    nextNode = tempNode
  }

  return newNode
}
