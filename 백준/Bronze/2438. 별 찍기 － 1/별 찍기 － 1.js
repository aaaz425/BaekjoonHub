const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stars = '';

rl.on('line', (line) => {
  for (let i = 1; i <= line; i++) {
    stars += '*'.repeat(i) + '\n';
  }
}).on('close', () => {
  console.log(stars);
  process.exit();
});
