//First try
function solution(n) {
    let result = 0;
    for (let i = 1; i <= 10; i++) {
        if (factorial(i) <= n) {
            result = i;
        }
    }
    return result;
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}