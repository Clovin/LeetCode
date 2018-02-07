/**
 * Created by Clovin on 08/02/2018.
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
var mergeTwoLists = function (l1, l2) {
  if (l1 === null) {
    return l2
  }

  if (l2 === null) {
    return l1
  }

  let result
  if (l1.val <= l2.val) {
    result = new ListNode(l1.val)
    l1 = l1.next
  } else {
    result = new ListNode(l2.val)
    l2 = l2.next
  }
  result.next = null

  let temp = result

  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      temp.next = new ListNode(l2.val)
      temp = temp.next
      l2 = l2.next
    } else {
      temp.next = new ListNode(l1.val)
      temp = temp.next
      l1 = l1.next
    }
  }

  if (l2 !== null) {
    temp.next = l2
  }

  if (l1 !== null) {
    temp.next = l1
  }

  return result
}
