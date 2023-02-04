/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  let sums = [0];
  nums.forEach((a, idx) => sums.push(sums[idx] + a));
  let B = [],
    res = nums.length + 1;
  for (let j = 0; j < sums.length; j++) {
    while (B.length > 0 && sums[j] <= sums[B[B.length - 1]]) {
      B.pop();
    }

    while (B.length > 0 && sums[j] - sums[B[0]] >= k) {
      res = Math.min(res, j - B.shift());
    }
    B.push(j);
  }
  return res < nums.length + 1 ? res : -1;
};
