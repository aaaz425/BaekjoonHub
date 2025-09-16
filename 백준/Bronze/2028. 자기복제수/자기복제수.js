const fs = require('fs');
const [n, ...nums] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

nums.forEach(num => {
    const numStr = num.trim();
    const numInt = Number(numStr);
    const squaredStr = String(numInt ** 2);

    if (squaredStr.endsWith(numStr)) {
        console.log('YES');
    } else {
        console.log('NO');
    }
});