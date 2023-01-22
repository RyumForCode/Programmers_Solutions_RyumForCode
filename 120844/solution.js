//First try
function solution(numbers, direction) {
    const answer = [...numbers];
    if (direction == 'right') {
        const a = answer.pop();
        answer.unshift(a);
    } else if (direction == 'left') {
        const a = answer.shift();
        answer.push(a);
    }
    return answer;
}