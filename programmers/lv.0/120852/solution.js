//First try - failed
function solution(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        if (n%i == 0) {
            arr.push(i); 
        }
    }
    if (!arr.length == 2) {
        for (let i = 1; i >= 0; i--) {
            solution(arr[arr.length/2-i]);
        }
    } else {
        return arr;
    }
}

//Second try
function solution(n) {
    let val = n;
    const arr = [];
    for (let i = 2; i <= n; i++){
        while ((val%i) == 0) {
            arr.push(i);
            val = val/i
        }
    }
    return arr.filter((num, index) => arr.indexOf(num) === index);
}