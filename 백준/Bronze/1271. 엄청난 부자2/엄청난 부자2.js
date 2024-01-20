const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const [n, m] = line.split(' ');

  console.log((BigInt(n) / BigInt(m)).toString());
  console.log((BigInt(n) % BigInt(m)).toString());

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
