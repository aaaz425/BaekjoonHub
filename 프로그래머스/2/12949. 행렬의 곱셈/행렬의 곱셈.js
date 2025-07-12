function solution(arr1, arr2) {
  return arr1.map(row =>
    arr2[0].map((_, colIndex) =>
      row.reduce((sum, val, idx) => sum + val * arr2[idx][colIndex], 0)
    )
  );
}
