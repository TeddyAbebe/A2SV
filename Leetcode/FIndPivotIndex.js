/**
 * @param {number[]} nums
 * @return {number}
 */
function pivotIndex(nums) {
  let sum = 0,
    leftSum = 0;
  for (let num of nums) sum += num;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
}
