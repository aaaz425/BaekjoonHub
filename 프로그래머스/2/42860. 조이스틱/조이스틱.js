function solution(name) {
  const n = name.length;
  let answer = 0;
  let move = n - 1;

  for (let i = 0; i < n; i++) {
    const code = name.charCodeAt(i);
    answer += Math.min(
      code - 65,
      91 - code
    );

    let next = i + 1;

    while (next < n && name[next] === 'A') {
      next++;
    }

    move = Math.min(
      move,
      i * 2 + n - next,
      i + (n - next) * 2
    );
  }

  return answer + move;
}