//First try
function solution(n, arr1, arr2) {
    const arr1b = [];
    const arr2b = [];
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr1b.push(('' + arr1[i].toString(2)).split(''));
        arr2b.push(('' + arr2[i].toString(2)).split(''));
        while (arr1b[i].length != n) {
            arr1b[i].unshift('0');
        }
        while (arr2b[i].length != n) {
            arr2b[i].unshift('0');
        }
    }
    for (let i = 0; i < n; i++) {
        let tempArr = [];
        for (let j = 0; j < n; j++) {
            if ((Number(arr1b[i][j]) + Number(arr2b[i][j])) >= 1) {
                tempArr.push('#');
            } else {
                tempArr.push(' ');
            }
        }
        arr.push(tempArr);
        arr[i] = arr[i].join('');
    }
    return arr;
}