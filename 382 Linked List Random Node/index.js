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
 * @param head The linked list's head.
 Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
var Solution = function (head) {
  this.head = head
}

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let result = this.head.val
  let tempNode = this.head.next
  let i = 2
  while (tempNode !== null) {
    let random = Math.random() * 1000000000 % (i++)
    if (random < 1) {
      result = tempNode.val
    }
    tempNode = tempNode.next
  }
  return result
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(head)
 * var param_1 = obj.getRandom()
 */
