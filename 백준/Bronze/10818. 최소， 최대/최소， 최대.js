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
  const [count, string] = input;

  const array = string.split(' ');

  const max = Math.max(...array);
  const min = Math.min(...array);

  console.log(min);
  console.log(max);

  process.exit();
});
