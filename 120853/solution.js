//First try
function solution(s) {
    const arr = s.split(' ');
    while (!(arr.indexOf('Z') == -1)) {
        arr.splice(arr.indexOf('Z')-1, 2);
    }
    return arr.reduce((acc, cur) => Number(acc) + Number(cur), 0);
}