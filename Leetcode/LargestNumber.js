var largestNumber = function (nums) {
  const sorted = nums.sort((a, b) => {
    const ab = a.toString() + b.toString();
    const ba = b.toString() + a.toString();
    return ba - ab;
  });

  const joined = sorted.join("");
  if (parseInt(joined) === 0) {
    return "0";
  } else {
    return joined;
  }
};
