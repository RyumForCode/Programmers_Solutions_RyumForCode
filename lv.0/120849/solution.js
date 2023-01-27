//First try
function solution(my_string) {
    const regExpWord = /a|e|i|o|u/g
    return my_string.replace(regExpWord, '');
}

//Simplify
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}