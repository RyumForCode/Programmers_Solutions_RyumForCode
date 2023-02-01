//First try
function solution(n, m) {
    const nArr = [];
    const mArr = [];
    let arr = [];
    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            nArr.push(i);
        }
    }
    for (let i = 1; i <= m; i++) {
        if (m % i == 0) {
            mArr.push(i);
        }
    }
    arr = nArr.filter(n => mArr.includes(n));
    const gcd = arr[arr.length - 1];
    const lcm = (n * m)/arr[arr.length - 1];
    return [gcd, lcm];
}