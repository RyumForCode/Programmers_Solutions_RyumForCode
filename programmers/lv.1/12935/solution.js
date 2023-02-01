//First try
function solution(arr) {
    const arr2 = [...arr];
    const lowNum = arr.sort((a, b) => a - b)[0]
    if (!(arr.length == 1)) {
        arr2.splice(arr2.indexOf(lowNum), 1);
    } else return [-1];
    return arr2;
}