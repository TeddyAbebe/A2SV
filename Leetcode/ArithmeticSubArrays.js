/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */

var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];
  let e = 0;
  let k = 0;

  while (e < r.length) {
    result.push(getTrueFalse(nums.slice(l[e], r[k] + 1)));
    e++;
    k++;
  }

  return result;
};

function getTrueFalse(arr) {
  arr.sort((a, b) => b - a);
  let dif = arr[0] - arr[1];

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i + 1] !== dif) {
      return false;
    }
  }
  return true;
}
