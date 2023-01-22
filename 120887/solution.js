//First try
function solution(i, j, k) {
    const arr = [];
    for (let k = i; k <= j; k++) {
        arr.push(k);
    }
    return [...(arr.join(''))].filter(num => num == k).length;
}