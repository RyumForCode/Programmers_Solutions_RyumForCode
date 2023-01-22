//First try
function solution(strlist) {
    let result = [];
    for (let i in strlist) {
        result.push(strlist[i].length);
    }
    return result;
}