//First try
function solution(my_string) {
    const arr = [...my_string];
    const arr2 = [];
    for (let i in arr) {
        if (arr[i] == arr[i].toLowerCase()) {
            arr2.push(arr[i].toUpperCase());
        } else {
            arr2.push(arr[i].toLowerCase());
        }
    }
    const str = arr2.join('');
    return str;
}