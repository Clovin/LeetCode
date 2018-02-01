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

  let prev
  let next
  let temp = head

  temp.next = prev
  //TODO: solve

  return head
}
