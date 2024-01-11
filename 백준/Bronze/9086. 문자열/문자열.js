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
  const [count, ...rest] = input;

  rest.forEach((value) => {
    console.log(value[0] + value[value.length - 1]);
  });

  process.exit();
});
