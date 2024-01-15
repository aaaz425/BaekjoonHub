const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const target = [1, 1, 2, 2, 2, 8];
  const answer = line.split(' ');

  const newAnswer = answer.map((value, index) => {
    return target[index] - +value;
  });

  console.log(newAnswer.join(' '));

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
