/**
 * @param {number[]} nums
 * @return {boolean}
 */

function PredictTheWinner(nums) {
  if (nums.length === 0) return false;
  return canWinHelper(nums, 0, 0, true);
}

function canWinHelper(nums, sum1, sum2, isPlayer1) {
  if (nums.length === 0) return sum1 >= sum2;
  if (isPlayer1) {
    return (
      canWinHelper(nums.slice(1), sum1 + nums[0], sum2, false) ||
      canWinHelper(nums.slice(0, -1), sum1 + nums[nums.length - 1], sum2, false)
    );
  } else {
    return (
      canWinHelper(nums.slice(1), sum1, sum2 + nums[0], true) &&
      canWinHelper(nums.slice(0, -1), sum1, sum2 + nums[nums.length - 1], true)
    );
  }
}
