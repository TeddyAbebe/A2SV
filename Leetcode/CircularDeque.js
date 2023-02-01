const ListNode = function (value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
const MyCircularDeque = function (k) {
  this.size = 0;
  this.k = k;
  this.head = null;
  this.tail = null;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.size++;
  const newHead = new ListNode(value);
  newHead.next = this.head;
  if (this.head) {
    this.head.prev = newHead;
  }
  this.head = newHead;
  if (!this.tail) {
    this.tail = newHead;
  }
  return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false;
  }
  this.size++;
  const newTail = new ListNode(value);
  if (!this.tail) {
    this.tail = newTail;
    this.head = this.tail;
  } else {
    this.tail.next = newTail;
    newTail.prev = this.tail;
    this.tail = newTail;
  }
  return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.size--;
  if (this.size === 0) {
    this.head = null;
    this.tail = null;
  } else {
    const newHead = this.head.next;
    this.head = newHead;
    newHead.prev = null;
  }
  return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false;
  }
  this.size--;
  if (this.size === 0) {
    this.head = null;
    this.tail = null;
  } else {
    const newTail = this.tail.prev;
    this.tail = newTail;
    newTail.next = null;
  }
  return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.head.value;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1;
  }
  return this.tail.value;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
  return this.size === this.k;
};
