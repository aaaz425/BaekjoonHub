function solution(s) {
  let answer = s.length;

  for (let size = 1; size <= Math.floor(s.length / 2); size++) {
    let compressed = '';
    let prev = s.slice(0, size);
    let count = 1;

    for (let i = size; i < s.length; i += size) {
      const curr = s.slice(i, i + size);

      if (curr === prev) {
        count++;
      } else {
        compressed += (count > 1 ? count : '') + prev;
        prev = curr;
        count = 1;
      }
    }

    compressed += (count > 1 ? count : '') + prev;

    answer = Math.min(answer, compressed.length);
  }

  return answer;
}