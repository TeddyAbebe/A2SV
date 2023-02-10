class NumMatrix {
  constructor(matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
      this.sum = [];
      return;
    }
    this.sum = Array(matrix.length + 1)
      .fill(0)
      .map(() => Array(matrix[0].length + 1).fill(0));
    for (let i = 1; i <= matrix.length; i++) {
      for (let j = 1; j <= matrix[0].length; j++) {
        this.sum[i][j] =
          this.sum[i - 1][j] +
          this.sum[i][j - 1] -
          this.sum[i - 1][j - 1] +
          matrix[i - 1][j - 1];
      }
    }
  }

  sumRegion(row1, col1, row2, col2) {
    return (
      this.sum[row2 + 1][col2 + 1] -
      this.sum[row1][col2 + 1] -
      this.sum[row2 + 1][col1] +
      this.sum[row1][col1]
    );
  }
}
