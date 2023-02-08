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
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let newHead = head.next;
  let prev = null;
  let curr = head;

  while (curr && curr.next) {
    let nextNode = curr.next;
    curr.next = nextNode.next;
    nextNode.next = curr;
    if (prev) {
      prev.next = nextNode;
    }
    prev = curr;
    curr = curr.next;
  }

  return newHead;
};
