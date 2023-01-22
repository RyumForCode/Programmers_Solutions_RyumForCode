//First try
function solution(num_list) {
    let answer = [0, 0]
    for (let i in num_list) {
        ((num_list[i]%2) == 0) ? answer[0]++ : answer[1]++;
    }
    return answer;
}