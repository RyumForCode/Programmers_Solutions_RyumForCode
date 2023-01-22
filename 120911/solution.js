//First try
function solution(my_string) {
    const arr = [];
    for (let i in my_string) {
        arr.push(my_string[i].toLowerCase());
    }
    return arr.sort().join('');
}