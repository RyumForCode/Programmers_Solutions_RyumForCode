//First try
function solution(balls, share) {
    let a = 1;
    let b = 1;
    for (let i = 0; i < share; i++) {
        a *= (balls-i);
    }
    for (let i = share; i >= 1; i--) {
        b *= i
    }
    return a/b;
}