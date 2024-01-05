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
  const [condition, array] = input;

  const [count, target] = condition.split(' ');

  const answer = array.split(' ').filter((value) => +value < +target);

  console.log(answer.join(' '));

  process.exit();
});
