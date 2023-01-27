//First try
function solution(n, k) {
    let answer = (12000*n) + (2000*k);
    const service = 2000 * parseInt(n/10);
    return answer - service;
}