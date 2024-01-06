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
  const max = Math.max(...input);
  const index = input.findIndex((value) => value == max) + 1;

  console.log(max);
  console.log(index);

  process.exit();
});
