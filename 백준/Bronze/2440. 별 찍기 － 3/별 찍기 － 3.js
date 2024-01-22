const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  for (let i = +line; i > 0; i--) {
    console.log('*'.repeat(i));
  }

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
