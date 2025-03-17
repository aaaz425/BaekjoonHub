const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n').filter(Boolean);

const seminarObj = {
    Algorithm: 204,
    DataAnalysis: 207,
    ArtificialIntelligence: 302,
    CyberSecurity: 'B101',
    Network: 303,
    Startup: 501,
    TestStrategy: 105,
};

input.slice(1).forEach(subject => {
    console.log(seminarObj[subject]);
});
