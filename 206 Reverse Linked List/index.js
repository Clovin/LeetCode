/**
 * Created by Clovin on 02/02/2018.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }

  if (head.next.next === null) {
    let temp = head.next
    head.next = null
    temp.next = head
    return temp
  }

  let prev = head
  let next
  let now = head.next

  while (now.next !== null) {
    next = now.next
    now.next = prev
    prev = now
    now = next
  }

  head.next = null
  now.next = prev
  return now
}

