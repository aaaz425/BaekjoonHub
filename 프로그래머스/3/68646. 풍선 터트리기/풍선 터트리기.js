function solution(a) {
  const n = a.length;

  if (n <= 2) return n;

  const leftMin = Array(n);
  const rightMin = Array(n);

  leftMin[0] = a[0];
  for (let i = 1; i < n; i++) {
    leftMin[i] = Math.min(leftMin[i - 1], a[i]);
  }

  rightMin[n - 1] = a[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMin[i] = Math.min(rightMin[i + 1], a[i]);
  }

  let answer = 0;

  for (let i = 0; i < n; i++) {
    if (
      a[i] > leftMin[i] &&
      a[i] > rightMin[i]
    ) {
      continue;
    }

    answer++;
  }

  return answer;
}