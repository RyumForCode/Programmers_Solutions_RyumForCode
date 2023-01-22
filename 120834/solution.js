//First try
function solution(age) {
    const decoder = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const numArr = [...String(age)];
    let answer = '';
    for (let i = 0; i < numArr.length; i++) {
        answer += decoder[numArr[i]]
    }
    return answer;
}