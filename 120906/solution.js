//First try
function solution(n) {
    const arr = [...String(n)]
    let sum = 0;
    for (let i in arr) sum += Number(arr[i]);
    return sum;
}