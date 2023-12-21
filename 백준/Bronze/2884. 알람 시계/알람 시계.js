const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
  input = line.split(' ');

  rl.close();
}).on('close', () => {
  const [hour, minute] = input;

  if (+minute >= 45) {
    console.log(`${hour} ${+minute - 45}`);
  } else if (+hour === 0) {
    console.log(`23 ${60 + (+minute - 45)}`);
  } else {
    console.log(`${+hour - 1} ${60 + (+minute - 45)}`);
  }

  process.exit();
});
