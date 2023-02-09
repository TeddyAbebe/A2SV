function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function (head) {
  if (!head) return head;

  let dummy = new ListNode(-1);
  dummy.next = head;
  let prev = dummy;
  let curr = head;
  while (curr) {
    while (curr.next && curr.val === curr.next.val) {
      curr = curr.next;
    }
    if (prev.next === curr) {
      prev = prev.next;
    } else {
      prev.next = curr.next;
    }
    curr = curr.next;
  }
  return dummy.next;
};
