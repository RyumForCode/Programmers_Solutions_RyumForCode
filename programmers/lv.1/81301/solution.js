//First try
function solution(s) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let result = s;
    let num = 0;
    while (num <= 9) {
        if (!(result.indexOf(arr[num]) == -1)) {
            result = result.replace(arr[num], num);
            num--;
        };
        num++;
    }
    return Number(result);
}