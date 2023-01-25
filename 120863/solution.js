//First try
function solution(polynomial) {
    const arr = polynomial.split(' ').filter(num => !(num == '+'));
    let polyArr = arr.filter(num => !(num.indexOf('x') == -1));
    let numArr = arr.filter(num => num.indexOf('x') == -1);
    for (let i = 0; i < polyArr.length; i++) {
        if (polyArr[i] == 'x') {
            polyArr.splice(i, 1, '1');
        } else {
            polyArr[i] = Number(polyArr[i].replace('x', ''));
        }
    }
    const polyNum = (polyArr.reduce((acc, cur) => Number(acc) + Number(cur), 0));
    const pureNum = (numArr.reduce((acc, cur) => Number(acc) + Number(cur), 0))
    if (polyNum > 1 && pureNum > 0) {
        return polyNum + 'x' + ' + ' + pureNum;
    } else if (polyNum == 1 && pureNum > 0) {
        return 'x' + ' + ' + pureNum
    } else if (polyNum == 1 && pureNum == 0) {
        return 'x'
    } else if (polyNum > 0 && pureNum == 0) {
        return polyNum + 'x';
    } else if (polyNum == 0 && pureNum > 0) {
        return String(pureNum);
    }
}