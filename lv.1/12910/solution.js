//First try
function solution(arr, divisor) {
    if (!(arr.filter(num => num%divisor == 0).length == 0)) {
         return arr.filter(num => num%divisor == 0).sort((a, b) => a - b);
    } else return [-1];
}