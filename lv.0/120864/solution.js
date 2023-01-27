//First try
function solution(my_string) {
    const arr = my_string.replace(/[a-zA-Z]/g, ' ').split(' ');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i] == '') {
            sum += Number(arr[i]);
        }
    }
    return sum;
}