//First try - cases succeed, but efficiency failed
function solution(arr) {
    let fixArr = [...arr];
    for (let i = 0; i < fixArr.length; i++) {
        if (fixArr[i] == fixArr[i + 1]) {
            fixArr.splice(i + 1, 1, 'a');
            fixArr = fixArr.filter(num => !(num == 'a'));
            i--
        }
    }
    return fixArr;
}

//Second try - completely solved
function solution(arr) {
    let fixArr = [...arr];
    let nextArr = [];
    for (let i = 0; i < fixArr.length; i++) {
        if (fixArr[i] != fixArr[i + 1]) {
            nextArr.push(fixArr[i]);
        }
    }
    return nextArr;
}