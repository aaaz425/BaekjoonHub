const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

let input = 0;

rl.on('line', (line) => {
  input = +line;
  
  rl.close();
  
}).on('close', () => {
  if (input % 400 === 0) {
    console.log(1);
    process.exit();
  }

  if (input % 4 === 0 && input % 100 !== 0) {
    console.log(1);
    process.exit();
  }

  console.log(0);
  process.exit();
})