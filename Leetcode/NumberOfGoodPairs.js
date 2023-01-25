var numIdenticalPairs = function (nums) {
  var min = 0;
  var count = 0;
  for (var i = 1; i < nums.length; i++) {
    if (nums[min] === nums[i]) {
      count++;
      if (i === nums.length - 1) {
        min++;
        i = min;
      }
    } else if (i === nums.length - 1) {
      min++;
      i = min;
    }
  }
  return count;
};
