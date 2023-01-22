//First try
function solution(n) {
    var answer = 7;
    while (answer < n) {
        answer += 7;
    }
    answer = (answer/7);
    return answer;
}