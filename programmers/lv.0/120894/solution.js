//First try
function solution(numbers) {
    const numer = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let str = numbers;
    for (let i = 0; i < numer.length; i++) {
        while (str.includes(numer[i])) {
            str = str.replace(numer[i], i);
        }
    }
    return Number(str);
}