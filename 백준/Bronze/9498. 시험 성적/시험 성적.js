const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

let input = '';

rl.on('line', (line) => {
  input = line;
  rl.close();
}).on('close', () => {
  console.log(
      +input >= 90 ? 'A' :
      +input >= 80 && input < 90 ? 'B' :
      +input >= 70 && input < 80 ? 'C' :
      +input >= 60 && input < 70 ? 'D' :
      'F'
  );
  process.exit();
})