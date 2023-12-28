const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
  input.push(line);

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  const [totalPrice, totalQuantity, ...rest] = input;

  const sumPrice = rest.reduce((acc, cur) => {
    const [price, quantity] = cur.split(' ');
    return acc + +price * +quantity;
  }, 0);

  if (totalPrice == sumPrice) {
    console.log('Yes');
  } else {
    console.log('No');
  }

  process.exit();
});
