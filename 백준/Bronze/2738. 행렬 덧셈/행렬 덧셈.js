const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line.split(' '));

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  const [count, ...array] = input;

  const [n, m] = count;

  const arrayA = array.slice(0, +n);
  const arrayB = array.slice(+n);

  for (let i = 0; i < n; i++) {
    const line = [];

    for (let j = 0; j < m; j++) {
      line.push(+arrayA[i][j] + +arrayB[i][j]);
    }

    console.log(line.join(' '));
  }

  process.exit();
});
