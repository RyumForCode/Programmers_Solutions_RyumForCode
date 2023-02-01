function solution (n) {
    const arr = n.split('\n')
    const result = [];
    for (let i = 1; i <= arr[0]; i++) {
        const tempArr = [];
        let count = 1;
        for (let j = 0; j < arr[i].split('').length; j++) {
            if (arr[i].split('')[j] == 'O') {
                tempArr.push(count);
                if (arr[i].split('')[j + 1] == 'O') {
                    count++;
                } else if (arr[i].split('')[j + 1] == undefined || arr[i].split('')[j + 1] == 'X') {
                    count = 1;
                }
            }
        }
        result.push(tempArr.reduce((acc, cur) => acc + cur, 0));
    }
    console.log(result.join('\n'));
}

function solution2 (n) {
    const arr = n.split('\n');
    for (let i = 1; i <= Number(arr[0]); i++) {
        let count = 0;
        let sum = 0;
        for (let j = 0; j < arr[i].split('').length; j++) {
            if (arr[i].split('')[j] == 'O') {
                count++;
            } else {
                count = 0;
            }
            sum += count;
        }
        console.log(sum);
    }
}

const n = require('fs').readFileSync('/dev/stdin').toString();

solution2(n);