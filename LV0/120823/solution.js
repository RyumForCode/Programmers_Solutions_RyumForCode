//First try
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    num = (Number(input[0]));
    let strLine = '';
    for (let i = 1; i <= num; i ++) {
        strLine += '*'.repeat(i)
        strLine += '\n'
    }
    console.log(strLine)
});