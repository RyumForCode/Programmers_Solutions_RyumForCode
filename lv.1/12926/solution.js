//First try - completely failed
function solution(s, n) {
    const arr = s.split('');
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] == ' ')){
            newArr.push(parseInt(arr[i], 36));    
        } else {
            newArr.push(' ');
        }
    }
    const resultArr = [];
    for (let i = 0; i < newArr.length; i++) {
        if (!(newArr[i] > 35)) {
            resultArr.push((newArr[i] + n).toString(36));
        } else {
            resultArr.push(((newArr[i] % 36) + 10).toString(36));
        }
    }
    return resultArr;
}

//Second try - succeed
function solution(s, n) {
    const arr = s.split('');
    const uniChar = [];
    const decode = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i].charCodeAt(0) == 32)) {
            if (arr[i].charCodeAt(0) <= 90 && arr[i].charCodeAt(0) + n > 90) {
                uniChar.push(arr[i].charCodeAt(0) + n - 26);
            } else if (arr[i].charCodeAt(0) <= 90 && arr[i].charCodeAt(0) + n <= 90) {
                uniChar.push(arr[i].charCodeAt(0) + n);
            } else if (arr[i].charCodeAt(0) <= 122 && arr[i].charCodeAt(0) + n > 122) {
                uniChar.push(arr[i].charCodeAt(0) + n - 26);
            } else if (arr[i].charCodeAt(0) <= 122 && arr[i].charCodeAt(0) + n <= 122) {
                uniChar.push(arr[i].charCodeAt(0) + n)
            } else {
                uniChar.push(arr[i].charCodeAt(0) + n);
            }
        } else {
            uniChar.push(arr[i].charCodeAt(0));
        }
    }
    console.log(uniChar);
    for (let i = 0; i < uniChar.length; i++) {
        if (uniChar[i] == 32) {
            decode.push(String.fromCharCode(uniChar[i]));
        } else {
            decode.push(String.fromCharCode(uniChar[i]));
        }
    }
    return decode.join('');
}