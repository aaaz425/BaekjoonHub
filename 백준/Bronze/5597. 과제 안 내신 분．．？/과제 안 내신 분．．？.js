const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = Array.from({ length: 30 }, (_, i) => i + 1);

rl.on('line', (line) => {
  const index = answer.indexOf(+line);
  answer.splice(index, 1);

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  const [a, b] = answer;

  console.log(a);
  console.log(b);

  process.exit();
});
