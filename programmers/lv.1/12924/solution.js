//First try - all primary cases solved, but cannot pass the efficiency cases
function solution(n) {
    const resultArr = [];
    for (let i = 1; i <= n; i++) {
        for (let j = i; j <= n; j++) {
            const tempArr = [];
            for (let k = i; k <= j; k++) {
                tempArr.push(k);
            }
            resultArr.push(tempArr.reduce((acc, cur) => acc + cur));
        }
    }
    return resultArr.filter(num => num == n).length;
}

//Second try - all primary cases solved, but cannot pass the efficiency cases
function solution(n) {
    const arr = new Array(n).fill().map((num, index) => index + 1);
    let result = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            if (arr.slice(i, j + 1).reduce((acc, cur) => acc + cur) == n) {
                result++;
            }
        }
    }
    return result;
}

//Third try - mate helped me a lot
function solution(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) (n % i == 0) && (i % 2 == 1) ? result++ : '';
    return result;
}

//Fourth try - mate helped me a lot
function solution(n) {
    let result = 1;
    for (let i = 1; i <= n/2; i++) {
        let sum = i;
        for (let j = (i + 1); j <= n; j++) {
            sum += j;
            if (sum == n) {
                result += 1;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }
    return result;
}