const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

let input = [];

rl.on('line', (line) => {
  input = line.toString().split(' ');
  rl.close();
}).on('close', () => {
  const [a, b] = input;
  console.log(
      +a > b ? '>' : 
      + a < b ? '<' : 
      '=='
  )
  process.exit();
})