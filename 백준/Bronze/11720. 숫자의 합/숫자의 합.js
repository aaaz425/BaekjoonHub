const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  const [count, numbers] = input;

  console.log(numbers.split('').reduce((acc, cur) => acc + +cur, 0));

  process.exit();
});
