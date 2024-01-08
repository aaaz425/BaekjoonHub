const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(+line % 42);

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  console.log(new Set(input).size);

  process.exit();
});
