const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = '';

rl.on('line', (line) => {
  input = line.split(' ').map((v) => +v);

  rl.close();
}).on('close', () => {
  const [a, b, c] = input;

  if (a === b && a === c) {
    console.log(10000 + a * 1000);
  } else if ((a === b && a !== c) || (a === c && a !== b)) {
    console.log(1000 + a * 100);
  } else if (b === c && a !== b) {
    console.log(1000 + b * 100);
  } else {
    console.log(Math.max(...input) * 100);
  }

  process.exit();
});
