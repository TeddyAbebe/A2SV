/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
  let maxLength = 1;
  let left = 0;
  let right = 0;
  let minValue = nums[0];
  let maxValue = nums[0];

  while (right < nums.length) {
    minValue = Math.min(minValue, nums[right]);
    maxValue = Math.max(maxValue, nums[right]);

    if (maxValue - minValue <= limit) {
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      left++;
      minValue = nums[left];
      maxValue = nums[left];
    }
  }

  return maxLength;
};
