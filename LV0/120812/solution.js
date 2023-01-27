//Several tries
function solution(array) {
    const result = array.reduce((accu, curr) => { 
        accu[curr] = (accu[curr] || 0) + 1;
        return accu;
    }, {});
    const arr = [...Object.values(result)].sort((a, b) => a - b)
    if (arr[arr.length-1] == arr[arr.length-2]) {
        return -1;
    } else {
        const a = Math.max(...Object.values(result));
        return Number(Object.keys(result).find(key => result[key] === a));
    }
}