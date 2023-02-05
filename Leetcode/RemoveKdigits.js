/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  if (num.length <= k) return "0";

  const stack = [];
  let removed = 0;

  for (const digit of num) {
    while (stack.length && stack[stack.length - 1] > digit && removed < k) {
      stack.pop();
      removed++;
    }
    stack.push(digit);
  }

  while (removed < k) {
    stack.pop();
    removed++;
  }

  while (stack.length > 1 && stack[0] === "0") {
    stack.shift();
  }

  return stack.join("");
};
