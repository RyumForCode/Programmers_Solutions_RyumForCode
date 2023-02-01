//First try
function solution(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            arr.push(i);
        }
    }
    result = arr.reduce((acc, cur) => acc + cur, 0);
    return result;
}