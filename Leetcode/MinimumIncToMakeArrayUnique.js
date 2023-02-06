/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      const temp = nums[i];
      nums[i] = nums[i - 1] + 1;
      count += nums[i] - temp;
    }
  }
  return count;
};
