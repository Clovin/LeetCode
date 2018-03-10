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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let lenA = 0
  let lenB = 0

  let tempA = headA
  while (tempA !== null) {
    lenA++
    tempA = tempA.next
  }

  let tempB = headB
  while (tempB !== null) {
    lenB++
    tempB = tempB.next
  }

  if (lenA > lenB) {
    let temp = headA
    headA = headB
    headB = temp

    temp = lenA
    lenA = lenB
    lenB = temp
  }

  while (lenB > lenA) {
    headB = headB.next
    lenB--
  }

  while (headA !== null && headA !== headB) {
    headA = headA.next
    headB = headB.next
  }

  return headA
}
