/**
 * @param {number[]} piles
 * @return {number}
 */

var maxCoins = function (piles) {
  let result = 0;
  len = piles.length * (2 / 3);
  piles.sort((a, b) => b - a);
  for (let i = 0; i < len; i++) {
    if (i % 2 === 1) {
      result += piles[i];
    }
  }
  return result;
};
