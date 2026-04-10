const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

let arr = A.map((v, i) => [v, i]);

arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let P = Array(N);

for (let i = 0; i < N; i++) {
  const originalIndex = arr[i][1];
  P[originalIndex] = i;
}

console.log(P.join(' '));