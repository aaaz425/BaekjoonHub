const fs = require('fs');
const [N, ...games] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let d = 0;
let p = 0;

for (let i = 0; i < N; i++) {
  const game = games[i];
  if (game === 'D') d++;
  else if (game === 'P') p++;

  if (Math.abs(d - p) >= 2) break;
}

console.log(`${d}:${p}`);
