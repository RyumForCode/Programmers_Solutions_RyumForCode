//First try
function solution(A, B) {
    const arr = A.split('');
    let num = 0;
    while (!(arr.join('') == B) && num < arr.length) {
        arr.unshift(arr.pop());
        num++;
    }
    if (num >= 0 && !(num == B.length)) {
        return num;
    } else {
        return -1;
    }
}