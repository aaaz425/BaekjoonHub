const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const T = Number(input[0]);

const dp = Array.from({ length: 31 }, () => Array(31).fill(0));

for (let i = 0; i <= 30; i++) {
  dp[i][0] = 1;
  dp[i][i] = 1;
}

for (let i = 2; i <= 30; i++) {
  for (let j = 1; j < i; j++) {
    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
  }
}

let answer = [];

for (let i = 1; i <= T; i++) {
  const [N, M] = input[i].split(' ').map(Number);
  answer.push(dp[M][N].toString());
}

console.log(answer.join('\n'));