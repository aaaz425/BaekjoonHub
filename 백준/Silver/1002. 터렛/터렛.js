const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = Number(input[0]);
let answer = [];

for (let i = 1; i <= T; i++) {
  const [x1, y1, r1, x2, y2, r2] = input[i].split(' ').map(Number);

  const dx = x1 - x2;
  const dy = y1 - y2;
  const distSq = dx * dx + dy * dy;

  const sum = r1 + r2;
  const diff = Math.abs(r1 - r2);

  const sumSq = sum * sum;
  const diffSq = diff * diff;

  if (distSq === 0) {
    if (r1 === r2) answer.push(-1);
    else answer.push(0);
    continue;
  }

  if (distSq === sumSq || distSq === diffSq) {
    answer.push(1);
  } else if (distSq > sumSq || distSq < diffSq) {
    answer.push(0);
  } else {
    answer.push(2);
  }
}

console.log(answer.join('\n'));