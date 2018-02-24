/**
 * Created by Clovin on 25/02/2018.
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
var deleteDuplicates = function (head) {
  if (head === null) {
    return head
  }

  let temp = head
  while (temp.next !== null) {
    if (temp.next.val === temp.val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }

  return head
}
