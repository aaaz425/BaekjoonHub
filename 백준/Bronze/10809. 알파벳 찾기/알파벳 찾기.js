const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  const input = line.split('');
  const charSet = 'abcdefghijklmnopqrstuvwxyz';
  const answer = Array.from({length: charSet.length}, () => -1);

  input.forEach(v => {
      const targetIdx = charSet.indexOf(v);
      
      if (answer[targetIdx] === -1) {
          answer.splice(targetIdx, 1, input.indexOf(v));
      }
  })

  console.log(answer.join(' '))
  
  if (!line) {
    rl.close();
  }
}).on('close', () => {
  process.exit();
});
