//First try
function solution(my_string, n) {
    let strArr = my_string.split('')
    let arr = [];
    for (let i = 0; i < strArr.length; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(strArr[i])
        }
    }
    return arr.join('');
}