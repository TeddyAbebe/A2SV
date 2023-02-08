/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  let result = [];
  let stack = [];
  let curr = head;
  while (curr) {
    result.push(curr.val);
    while (stack.length && stack[stack.length - 1].val < curr.val) {
      result[stack.pop().index] = curr.val;
    }
    stack.push({ val: curr.val, index: result.length - 1 });
    curr = curr.next;
  }
  while (stack.length) {
    result[stack.pop().index] = 0;
  }
  return result;
};
