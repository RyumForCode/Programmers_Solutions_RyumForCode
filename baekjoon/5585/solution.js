function solution(n) {
    let result = 0;
    let myMoney = 1000 - n;
    const moneyList = [500, 100, 50, 10, 5, 1];
    for (let i = 0; i < moneyList.length; i++) {
        let currentVal = 0;
        if (myMoney / moneyList[i] >= 1) {
            currentVal = Math.floor(myMoney / moneyList[i]);
            myMoney -= currentVal * moneyList[i];
        }
        result += currentVal;
        currentVal = 0;
    }
    console.log(result);
}

const n = require('fs').readFileSync('/dev/stdin').toString();

solution(n);