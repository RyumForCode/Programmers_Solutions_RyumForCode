//First try
function solution(dots) {
    const arr = dots.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    return (arr[arr.length-1][0] - arr[0][0]) * (arr[arr.length-1][1] - arr[0][1]);
}