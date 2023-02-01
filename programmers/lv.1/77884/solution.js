//First try
function solution(left, right) {
    const arr = [];
    const ovrArr = [];
    const tempArr = [];
    let counter = 0;
    for (let i = left; i <= right; i++) {
        tempArr.length = 0;
        ovrArr.push(i);
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                tempArr.push(j);
            }
        }
        arr.push(tempArr.length);
    }
    const solutionResult = arr.reduce((acc, cur) => {
        let reduceResult = 0;
        if (cur % 2 == 0) {
            reduceResult = acc + ovrArr[counter];
        } else {
            reduceResult = acc - ovrArr[counter];
        }
        counter++;
        return reduceResult;
    }, 0);
    return solutionResult;
}