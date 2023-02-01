//First try
function solution(rsp) {
    const arr = [];
    for (let i in rsp) {
        if (rsp[i] == 2) {
            arr.push(0);
        } else if (rsp[i] == 5) {
            arr.push(2);
        } else {
            arr.push(5);
        }
    }
    return arr.join('');;
}