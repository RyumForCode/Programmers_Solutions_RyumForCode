//First try
function solution(my_str, n) {
    let str = my_str;
    const arr = [];
    for (let i = 0; i < my_str.length/n; i++) {
        arr.push(str.slice(i*n, (i+1)*n));
    }
    return arr;
}