//First try
function solution(array, n) {
    const arr = [...array]
    arr.sort((a, b) => Math.abs(n - a) - Math.abs(n - b));
    return arr[0];
}

//Second try