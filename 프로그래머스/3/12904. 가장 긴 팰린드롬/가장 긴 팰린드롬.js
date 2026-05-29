function solution(s) {
  let max = 1;

  const expand = (left, right) => {
    while (
      left >= 0 &&
      right < s.length &&
      s[left] === s[right]
    ) {
      max = Math.max(max, right - left + 1);
      left--;
      right++;
    }
  };

  for (let i = 0; i < s.length; i++) {
    expand(i, i);

    expand(i, i + 1);
  }

  return max;
}