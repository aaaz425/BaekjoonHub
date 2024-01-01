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

  rest.forEach((value, index) => {
    const [a, b] = value.split(' ');

    console.log(`Case #${index + 1}: ${+a + +b}`);
  });

  process.exit();
});
