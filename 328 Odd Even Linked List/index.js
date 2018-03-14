/**
 * Created by Clovin on 15/03/2018.
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
var oddEvenList = function (head) {
  if (head === null) {
    return head
  }

  let [slow, fast] = [head, head]

  while (fast.next !== null && fast.next.next !== null) {
    let tempFast1 = fast.next
    let tempFast2 = fast.next.next
    tempFast1.next = tempFast2.next
    let tempSlow = slow.next
    slow.next = tempFast2
    tempFast2.next = tempSlow
    slow = slow.next
    fast = tempFast1
  }

  return head
}
