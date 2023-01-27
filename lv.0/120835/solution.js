//First try - succeed
function solution(emergency) {
    const arr = [...emergency];
    const chgArr = [...emergency];
    const maxNum = emergency.sort((a, b) => a - b)[emergency.length-1];
    const minNum = emergency.sort((a, b) => a - b)[0];;
    for (let i = minNum; i <= maxNum; i++) {
        for (let j = 0; j < emergency.length; j++) {
            if (emergency[j] == i) {
                chgArr.splice(arr.findIndex(e => e == emergency[j]), 1, (emergency.length-j));
            }
        }
    }
    return chgArr;
}

//Second try, Simplify
function solution(emergency) {
    const arr = [...emergency]
    return emergency.map(num => arr.sort((a, b) => b - a).indexOf(num) + 1);
}