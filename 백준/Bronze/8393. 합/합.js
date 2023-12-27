const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line;

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  const sum = Array.from({ length: +input }, (_, i) => i + 1).reduce(
    (acc, cur) => acc + +cur,
    0
  );

  console.log(sum);

  process.exit();
});
