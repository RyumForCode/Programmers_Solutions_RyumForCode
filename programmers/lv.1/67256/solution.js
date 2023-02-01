//First try
function solution(numbers, hand) {
    const lArr = ['*', 7, 4, 1];
    const rArr = ['#', 9, 6, 3];
    const mArr = [0, 8, 5, 2];
    let curL = [0, 0];
    let curR = [0, 2];
    const arr = [...numbers];
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (lArr.includes(arr[i])) {
            resultArr.push('L');
            curL = [lArr.indexOf(arr[i]), 0];
        } else if (rArr.includes(arr[i])) {
            resultArr.push('R');
            curR = [rArr.indexOf(arr[i]), 2];
        } else if (i > 0 && mArr.includes(arr[i])) {
            if ((Math.abs(mArr.indexOf(arr[i]) - curL[0])) + (Math.abs(curL[1] - 1)) == (Math.abs(mArr.indexOf(arr[i]) - curR[0]) + (Math.abs(curR[1] - 1)))) {
                if (hand == 'left') {
                    resultArr.push('L');
                    curL = [mArr.indexOf(arr[i]), 1];
                } else {
                    resultArr.push('R');
                    curR = [mArr.indexOf(arr[i]), 1];
                }
            } else if ((Math.abs(mArr.indexOf(arr[i]) - curL[0])) + (Math.abs(1 - curL[1])) < (Math.abs(mArr.indexOf(arr[i]) - curR[0]) + (Math.abs(1 - curR[1])))) {
                resultArr.push('L');
                curL = [mArr.indexOf(arr[i]), 1];
            } else {
                resultArr.push('R');
                curR = [mArr.indexOf(arr[i]), 1];
            }
        } else {
            if (hand == 'left') {
                resultArr.push('L');
                curL = [mArr.indexOf(arr[i]), 1]
            } else {
                resultArr.push('R');
                curR = [mArr.indexOf(arr[i]), 1]
            }
        }
    }
    return resultArr.join('');
}