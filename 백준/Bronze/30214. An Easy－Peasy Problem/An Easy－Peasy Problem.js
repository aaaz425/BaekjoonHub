const [s1, s2] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number);

if (s1 * 2 >= s2) {
  console.log('E');
} else {
  console.log('H');
}