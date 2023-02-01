//First try - failed
function solution(n) {
    let counter = 0;
    let arr = [];
    for (let i = 2; i <= n; i++) {
        arr.length = 0;
        for (let j = 2; j <= i; j++) {
            if (i % j == 0) {
                arr.push(j);
            }
        }
        if (arr.length == 1) {
            counter++;   
        }
    }
    return counter;
}

//Second try - it succeed, but it doesn't work well. I tried several times to test, sometimes it passed, but sometimes denied.
function solution(n) {
    let counter = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            counter++;
        }   
    }
    return counter;
}

function isPrime (num) {
    for (let j = 2; j <= Math.sqrt(num); j++) {
        if (num % j === 0) return false;
    }
    return true
}