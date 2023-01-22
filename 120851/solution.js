//First try
function solution(my_string) {
    let answer = 0;
    const regex = /[^0-9]/g;
    const onlyNum = my_string.replace(regex, '');
    const arr = [...onlyNum];
    for (let i in arr) {
        answer += Number(arr[i]);
    }
    return answer;
}