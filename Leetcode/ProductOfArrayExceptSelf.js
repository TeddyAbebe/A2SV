function productExceptSelf(nums) {
  let n = nums.length;
  let left = Array(n).fill(1);
  let right = Array(n).fill(1);
  let answer = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = n - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
}
