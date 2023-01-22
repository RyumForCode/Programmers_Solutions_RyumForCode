//First try
function solution(array) {
    return [...(array.join())].filter(n => n == 7).length;
}