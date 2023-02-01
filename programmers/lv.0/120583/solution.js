//First try
function solution(array, n) {
    let answer = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == n) answer ++;
    }
    return answer;
}

//Simplify
function solution(array, n) {
    let answer = 0;
    for (let i in array) {if (array[i] == n) answer ++;}
    return answer;
}

//Use filter
function solution(array, n) {
    let answer = 0;
    answer = array.filter(number => number == n);
    return answer.length;
}