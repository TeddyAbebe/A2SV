/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  if (!s || s.length === 0) return 0;
  let stack = [];
  let currentNumber = 0;
  let operation = "+";
  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    if (currentChar === " ") continue;
    if (!isNaN(currentChar)) {
      currentNumber = currentNumber * 10 + parseInt(currentChar);
    } else {
      if (operation === "-") {
        stack.push(-currentNumber);
      } else if (operation === "+") {
        stack.push(currentNumber);
      } else if (operation === "*") {
        stack.push(stack.pop() * currentNumber);
      } else if (operation === "/") {
        stack.push(Math.trunc(stack.pop() / currentNumber));
      }
      operation = currentChar;
      currentNumber = 0;
    }
  }
  if (operation === "-") {
    stack.push(-currentNumber);
  } else if (operation === "+") {
    stack.push(currentNumber);
  } else if (operation === "*") {
    stack.push(stack.pop() * currentNumber);
  } else if (operation === "/") {
    stack.push(Math.trunc(stack.pop() / currentNumber));
  }
  let result = 0;
  while (stack.length > 0) {
    result += stack.pop();
  }
  return result;
};
