//First try
function solution(array) {
    num = array.find(num => num == Math.max(...array));
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}