//First try
function solution(my_string) {
    const arr = [...my_string.replace(/[a-z]/g, '')];
    const arrNum = [];
    for (let i in arr) {
        arrNum.push(Number(arr[i]));
    }
    return arrNum.sort((a, b) => a - b);
}