/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let len = nums.length;

  let maxsub = 0;
  let i = 0,
    j = 0;
  let minDeque = [],
    maxDeque = [];
  while (j < len) {
    while (minDeque.length && nums[minDeque[minDeque.length - 1]] >= nums[j]) {
      minDeque.pop();
    }
    minDeque.push(j);
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] <= nums[j]) {
      maxDeque.pop();
    }
    maxDeque.push(j);

    if (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      i++;
      if (i > minDeque[0]) {
        minDeque.shift();
      }
      if (i > maxDeque[0]) {
        maxDeque.shift();
      }
    } else {
      maxsub = Math.max(maxsub, j - i + 1);
      j++;
    }
  }
  return maxsub;
};
