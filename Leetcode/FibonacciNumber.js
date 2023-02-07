/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n === 0 || n === 1) return n;
    
  let first = 0,
    second = 1;
  let sum = first + second;
  for (let i = 2; i < n; i++) {
    first = second;
    second = sum;
    sum = first + second;
  }
  return sum;
};
