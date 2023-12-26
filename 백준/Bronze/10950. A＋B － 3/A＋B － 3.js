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
  const [length, ...rest] = input;

  for (let i = 0; i < length; i++) {
    const [a, b] = input[i + 1].split(' ');
    console.log(+a + +b);
  }

  process.exit();
});
