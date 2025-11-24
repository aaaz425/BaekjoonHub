const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input, 10);

let answer = -1;
for (let i = N + 1; i <= 9999; i++) {
  const front = Math.floor(i / 100);
  const back = i % 100;
  const sum = front + back;
  if (sum * sum === i) {
    answer = i;
    break;
  }
}

console.log(answer);