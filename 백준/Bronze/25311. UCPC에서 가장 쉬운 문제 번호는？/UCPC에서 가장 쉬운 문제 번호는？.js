const readline = require("readline");

const rl = readline.createInterface({ 
  input: process.stdin, 
  output: process.stdout, 
});

rl.on('line', (line) => {
  rl.close();
}).on('close', () => {
  console.log('A')
  
  process.exit();
})