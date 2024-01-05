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
  const [count, array, target] = input;

  const answer = array.split(' ').filter((value) => value === target).length;

  console.log(answer);

  process.exit();
});
