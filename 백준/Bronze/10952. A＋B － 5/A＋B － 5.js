const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let answer = '';

rl.on('line', (line) => {
  const [a, b] = line.split(' ');

  if (a != 0) {
    answer += +a + +b + '\n';
  }

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  console.log(answer);
  process.exit();
});
