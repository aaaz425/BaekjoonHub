function solution(dirs) {
  const visited = new Set();

  const command = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  let x = 5;
  let y = 5;
  let answer = 0;

  for (let i = 0; i < dirs.length; i++) {
    const [dy, dx] = command[dirs[i]];
    const tx = x + dx;
    const ty = y + dy;

    if (ty >= 0 && ty <= 10 && tx >= 0 && tx <= 10) {
      const path1 = `${x},${y},${tx},${ty}`;
      const path2 = `${tx},${ty},${x},${y}`;

      if (!visited.has(path1) && !visited.has(path2)) {
        visited.add(path1);
        visited.add(path2);
        answer++;
      }

      x = tx;
      y = ty;
    }
  }

  return answer;
}