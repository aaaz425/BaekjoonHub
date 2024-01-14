const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  if (line !== ' ') {
    console.log(line.trim().split(' ').length);
  } else {
    console.log(0);
  }

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
