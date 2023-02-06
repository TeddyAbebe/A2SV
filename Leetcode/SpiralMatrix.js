/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let result = [];
  if (!matrix.length) return result;

  let r1 = 0,
    r2 = matrix.length - 1,
    c1 = 0,
    c2 = matrix[0].length - 1;

  while (r1 <= r2 && c1 <= c2) {
    for (let c = c1; c <= c2; c++) result.push(matrix[r1][c]);
    for (let r = r1 + 1; r <= r2; r++) result.push(matrix[r][c2]);
    if (r1 < r2 && c1 < c2) {
      for (let c = c2 - 1; c > c1; c--) result.push(matrix[r2][c]);
      for (let r = r2; r > r1; r--) result.push(matrix[r][c1]);
    }
    r1++;
    r2--;
    c1++;
    c2--;
  }
  return result;
};
