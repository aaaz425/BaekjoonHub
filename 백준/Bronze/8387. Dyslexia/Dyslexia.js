const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const N = +input[0];
const S = input[1].trim();
const T = input[2].trim();

let count = 0;
for (let i = 0; i < N; i++) {
  if (S[i] === T[i]) count++;
}

console.log(count);