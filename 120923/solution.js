//First try
function solution(num, total) {
    const arr = [];
    let evenNum = 0;
    for (let i = 1; i < num; i++) {
        evenNum += i;
    }
    if (num%2 == 1) {
        for (let i = 0; i < num; i++) {
            arr.push(total/num - Math.floor(num/2) + i);
        }
    } else {
        for (let i = 0; i < num; i++) {
            arr.push(i + ((total - evenNum)/num));
        }
    }
    return arr;
}