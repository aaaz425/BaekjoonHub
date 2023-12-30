const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';

rl.on('line', (line) => {
  if (line.split(' ').length === 2) {
    const [a, b] = line.split(' ');
    answer += +a + +b + '\n';
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
