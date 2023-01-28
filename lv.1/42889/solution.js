//First try
function solution(N, stages) {
    const arr = [...stages].sort((a, b) => a - b);
    const countArr = [];
    for (let i = 1; i <= (N + 1); i++) {
        if (arr.indexOf(i) != -1) {
            countArr.push(arr.lastIndexOf(i) - arr.indexOf(i) + 1);
        } else {
            countArr.push(0);
        }
    }
    const failArr = [];
    for (let i = 0; i < N; i++) {
        failArr.push(countArr[i]/(countArr.slice(i).reduce((acc, cur) => acc + cur)));
    }
    const mapObject = new Map();
    for (let i = 1; i <= N; i++) {
        mapObject.set(i, failArr[i-1]);
    }
    const sortKeyObject = [...mapObject].sort((a, b) => b[1] - a[1]);
    const resultArr = [];
    for (let i = 0; i < N; i++) {
        resultArr.push(sortKeyObject[i][0]);
    }
    return resultArr;
}