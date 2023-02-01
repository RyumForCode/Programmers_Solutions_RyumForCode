//First try
function solution(slice, n) {
    let answer = 0;
    do {
        answer++;
    } while ((slice*answer) < n)
    return answer;
}