/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let bracket = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let heap = [];
  for (let char of s) {
    if (bracket[char]) {
      heap.push(bracket[char]);
    } else {
      if (heap.pop() !== char) return false;
    }
  }
  return !heap.length;
};
