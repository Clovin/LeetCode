/**
 * Created by Clovin on 10/03/2018.
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true
  }

  let slow = head
  let fast = head
  while (fast.next !== null && fast.next.next !== null) {
    slow = slow.next
    fast = fast.next.next
  }
  let temp = slow
  slow = slow.next
  temp.next = null

  let last = null
  while (slow.next !== null) {
    let temp = slow.next
    slow.next = last
    last = slow
    slow = temp
  }
  slow.next = last

  while (head !== null && slow !== null) {
    if (head.val !== slow.val) {
      return false
    }

    head = head.next
    slow = slow.next
  }

  return true
}

