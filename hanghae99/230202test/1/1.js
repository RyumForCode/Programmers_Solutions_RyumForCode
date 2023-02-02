function solution (num) {
    const moneySize = [500, 100, 50, 10];
    let currentMoney = 1000 - num;
    let answer = 0;
    for (let i = 0; i < moneySize.length; i++) {
        if ((currentMoney / moneySize[i]) >= 1) {
            answer += Math.floor(currentMoney / moneySize[i])
            currentMoney -= (moneySize[i] * Math.floor(currentMoney / moneySize[i]));
        }
    }
    return answer;
}

// * Test case 1, answer 1
// let num1 = 900;

// * Test case 2, answer 5
// let num1 = 550;

// * Test case 3, answer 6
// let num1 = 320;

// * Test case 4, answer 8 ** Test input **
let num1 = 160;

console.log(solution(num1));