//First try - few cases wrong, but normally succeed. except test case : lost : [2, 3, 4, 7], reserve : [3, 4, 5, 8]
function solution(n, lost, reserve) {
    const genArr = lost.filter(num => reserve.includes(num));
    let sortLost = [...lost].filter(num => !(genArr.includes(num))).sort((a, b) => a - b);
    let arr = [...reserve].filter(num => !(genArr.includes(num))).sort((a, b) => a - b);
    let curNum = n - sortLost.length;
    for (let i = 0; i < sortLost.length; i++) {
        if (arr.indexOf(sortLost[i] - 1) != -1) {
            curNum++;
            arr.splice(arr.indexOf(lost[i] - 1), 1);
        } else if (arr.indexOf(lost[i] + 1) != -1) {
            curNum++;
            arr.splice(arr.indexOf(lost[i] + 1), 1);
        }
    }
    return curNum;
}

//Second try
function solution(n, lost, reserve) {
    const genArr = reserve.filter(num => lost.includes(num));
    reserve = reserve.filter(num => !lost.includes(num)).sort((a, b) => a - b);
    lost = lost.filter(num => !genArr.includes(num)).sort((a, b) => a - b);
    let num = n - lost.length;
    for (let i = 0; i < lost.length; i++) {
        if (reserve.includes(lost[i] - 1)) {
            num++
            reserve.splice(reserve.indexOf(lost[i] - 1), 1);
        } else if (reserve.includes(lost[i] + 1)) {
            num++
            reserve.splice(reserve.indexOf(lost[i] + 1), 1);
        } else {
            num = num;
        }
    }
    return num;
}