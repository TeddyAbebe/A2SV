/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let circle = [];
  for (let i = 0; i < n; i++) {
    circle.push(i + 1);
  }

  let index = 0;
  while (circle.length > 1) {
    index = (index + k - 1) % circle.length;
    circle.splice(index, 1);
  }

  return circle[0];
};
