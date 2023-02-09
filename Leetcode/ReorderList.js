/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
function reorderList(head) {
  if (!head || !head.next) return head;

  let slow = head,
    fast = head;

  // Find the middle of the linked list
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split the linked list into two halves
  let secondHalf = slow.next;
  slow.next = null;

  // Reverse the second half
  let prev = null,
    current = secondHalf,
    next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  // Merge the two linked lists
  let firstHalf = head,
    secondPointer = prev;
  while (secondPointer) {
    let temp1 = firstHalf.next;
    let temp2 = secondPointer.next;

    firstHalf.next = secondPointer;
    secondPointer.next = temp1;

    firstHalf = temp1;
    secondPointer = temp2;
  }

  return head;
}
