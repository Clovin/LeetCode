/**
 * Created by Clovin on 28/02/2018.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  while (head !== null && head.val === val) {
    head = head.next
  }
  if (head === null || head.next === null) {
    return head
  }

  let tempNode = head
  while (tempNode.next !== null) {
    if (tempNode.next.val === val) {
      tempNode.next = tempNode.next.next
    } else {
      tempNode = tempNode.next
    }
  }

  return head
}
