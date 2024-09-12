function solution(triangle) {
  for (let i = 1; i < triangle.length; i++) {
    for (let j = 0; j < triangle[i].length; j++) {
      let left = 0;
      let right = 0;

      if (j !== 0) {
        left = triangle[i - 1][j - 1];
      }

      if (j !== triangle[i].length - 1) {
        right = triangle[i - 1][j];
      }

      if (left >= right) {
        triangle[i][j] += left;
      } else {
        triangle[i][j] += right;
      }
    }
  }

  return Math.max(...triangle.at(-1));
}