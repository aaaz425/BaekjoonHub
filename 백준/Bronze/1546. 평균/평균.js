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
  const [count, score] = input;

  const max = Math.max(...score.split(' '));
  const newScore = score.split(' ').map((value) => {
    return (+value / +max) * 100;
  });
  const average = newScore.reduce((acc, cur) => +acc + +cur, 0) / +count;

  console.log(average);

  process.exit();
});
