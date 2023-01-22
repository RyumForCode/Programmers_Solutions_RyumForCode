//First try
function solution(my_string, num1, num2) {
    const strArr = [...my_string];
    const chgArr = [];
    for (let i = 0; i < strArr.length; i++) {
        if (num1 == i) {
            chgArr.push(strArr[num2]);
        } else if (num2 == i) {
            chgArr.push(strArr[num1]);
        } else {
            chgArr.push(strArr[i]);
        }
    }
    return chgArr.join('');
}