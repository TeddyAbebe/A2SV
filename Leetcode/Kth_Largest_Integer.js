var kthLargestNumber = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  return nums[nums.length - k];
};
