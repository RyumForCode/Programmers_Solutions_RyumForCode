//First try - failed
function solution(n) {
    const arr = [];
    for (let i = 2; i <= n; i++) {
        if(i%3 == 0 || !(String(i).split('').indexOf('3') == -1)) {
            arr.push(i);
        }
    }
    return n + arr.filter((num, index) => arr.indexOf(num) == index).length;
}

//Second try - succeed
function solution(n) {
    let count = 0;
    let number = 0;
    const arr = [];
    while (!(count == n)) {
        count++;
        number++;
        while (!(String(number).split('').indexOf('3') == -1) || number%3 == 0) {
            number++;            
        }
    }
    return number;
}