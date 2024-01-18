const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const count = +line;
  for (let i = 1; i <= count; i++) {
    console.log(' '.repeat(count - i) + '*'.repeat(i * 2 - 1));
  }

  for (let i = count - 1; i > 0; i--) {
    console.log(' '.repeat(count - i) + '*'.repeat(i * 2 - 1));
  }

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
