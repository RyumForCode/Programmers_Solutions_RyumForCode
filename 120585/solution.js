//First try
function solution(array, height) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > height) answer++;
    }
    return answer;
}

//Simplify
function solution(array, height) {
    let answer = 0;
    for (let i in array) {if(array[i] > height) answer++;}
    return answer;
}