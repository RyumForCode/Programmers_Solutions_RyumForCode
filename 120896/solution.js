//First try
function solution(s) {
    const arr = [...s].sort();
    const map1 = new Map();
    const set1 = new Set();
    const resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map1.has(arr[i])) {
            map1.set(arr[i], true);
            set1.add(arr[i]);
        } else {
            map1.set(arr[i], false);
        }
    }
    let arr2 = [...set1];
    for (let i = 0; i < map1.size; i++) {
        if (map1.get(arr2[i]) == true) {
            resultArr.push(arr2[i]);
        }
    }
    return resultArr.join('');
}

//Simplify
function solution(s) {
    const arr = [...s].sort();
    const resultArr = [];
    for (let i in arr) {
        (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) ? resultArr.push(arr[i]) : null;
    }
    return resultArr.join('');
}