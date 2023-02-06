/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let stack = [];
  let num = 0;
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= "0" && s[i] <= "9") {
      num = num * 10 + +s[i];
    } else if (s[i] === "[") {
      stack.push(res);
      stack.push(num);
      res = "";
      num = 0;
    } else if (s[i] === "]") {
      let repeat = stack.pop();
      let temp = stack.pop();
      res = temp + res.repeat(repeat);
    } else {
      res += s[i];
    }
  }
  return res;
};
