//First try
function solution(my_string) {
    const arr = my_string.split(' ');
    let num = Number(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] == '+') {
            num += Number(arr[i+1]);
        } else {
            num -= Number(arr[i+1]);
        }   
    }
    return num;
}