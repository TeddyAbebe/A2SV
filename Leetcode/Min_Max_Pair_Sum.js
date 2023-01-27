/**
 * @param {number[]} nums
 * @return {number}
 */

var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;
  let arr = [];

  while (i < j) {
    arr.push(nums[i] + nums[j]);
    i++;
    j--;
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
};
