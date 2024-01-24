const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const quater = 25;
const dime = 10;
const nickel = 5;
const penny = 1;

const getQuotientAndRemainder = (dividend, divisor) => {
  return [Math.floor(dividend / divisor), dividend % divisor];
};

rl.on('line', (line) => {
  input.push(line);

  if (!line) {
    rl.close();
  }
}).on('close', () => {
  const [count, ...rest] = input;

  rest.forEach((charge) => {
    const coins = [];
    const [quaterQuotient, quaterRemainder] = getQuotientAndRemainder(
      charge,
      quater
    );

    coins.push(quaterQuotient);

    const [dimeQuotient, dimeRemainder] = getQuotientAndRemainder(
      quaterRemainder,
      dime
    );

    coins.push(dimeQuotient);

    const [nickelQuotient, nickelRemainder] = getQuotientAndRemainder(
      dimeRemainder,
      nickel
    );

    coins.push(nickelQuotient);

    const [pennyQuotient, _] = getQuotientAndRemainder(nickelRemainder, penny);

    coins.push(pennyQuotient);

    console.log(coins.join(' '));
  });

  process.exit();
});
