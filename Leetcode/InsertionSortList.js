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
var insertionSortList = function(head) {
    if (!head || !head.next) return head;
    let place = new ListNode(0);
    place.next = head;
    let curr = head;
    while (curr.next) {
        if (curr.next.val < curr.val) {
            let pre = place;
            while (pre.next.val < curr.next.val) {
                pre = pre.next;
            }
            let temp = curr.next;
            curr.next = temp.next;
            temp.next = pre.next;
            pre.next = temp;
        } else {
            curr = curr.next;
        }
    }
    return place.next;
};
