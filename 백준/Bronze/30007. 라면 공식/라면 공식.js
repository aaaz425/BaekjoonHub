const fs = require('fs');
const [N, ...input] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < N; i++) {
  const [A, B, X] = input[i].split(' ').map(Number);
  const W = A * (X - 1) + B;
  console.log(W);
}