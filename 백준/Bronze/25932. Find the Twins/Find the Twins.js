const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, ...sets] = input;

sets.forEach((dataSet, i) => {
    const players = dataSet.trim().split(' ');
    const isMackHere = players.includes('18');
    const isZackHere = players.includes('17');
    const isBothHere = isMackHere && isZackHere;

    console.log(dataSet);
    
    switch (true) {
        case isBothHere:
            console.log('both');
            break;
        case isMackHere:
            console.log('mack');
            break;
        case isZackHere:
            console.log('zack');
            break;
        default:
            console.log('none');
    }

    if (i < sets.length - 1) {
        console.log('');
    }
});
