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
  const times = input / 4;

  let long = '';

  for (let i = 0; i < times; i++) {
    if (!long.length) {
      long += 'long';
    } else {
      long += ' long';
    }
  }

  console.log(`${long} int`);

  process.exit();
});
