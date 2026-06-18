/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let temp = dummy;

  while (temp.next !== null && temp.next.next !== null) {
    let first = temp.next;
    let second = temp.next.next;

    first.next = second.next;
    second.next = first;
    temp.next = second;

    temp = first;
  }
  return dummy.next;
};
