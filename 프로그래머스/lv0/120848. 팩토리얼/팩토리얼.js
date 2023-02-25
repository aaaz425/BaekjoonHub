function solution(n) {
  let start = 1;
  let end = n;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (factorial(mid) <= n) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end;
}

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}