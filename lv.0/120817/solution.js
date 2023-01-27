//First try
function solution(numbers) {
    let answer = 0;
    for (let i in numbers) {
        answer += numbers[i];
    }
    answer = (answer/numbers.length);
    return answer;
}