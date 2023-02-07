/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  if (n === 1) return "0";
  let mid = (1 << (n - 1)) - 1;
  if (k === mid + 1) return "1";
  if (k < mid + 1) return findKthBit(n - 1, k);
  return findKthBit(n - 1, (1 << n) - 1 - k + 1) === "0" ? "1" : "0";
};
