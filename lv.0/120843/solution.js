//First try
function solution(numbers, k) {
    const arr = [];
    if (numbers.length % 2 == 0) {
        for (let i in numbers) {
            if (!(numbers[i] % 2 == 0)) {
                arr.push(numbers[i]);
            }
        }
    } else {
        for (let i in numbers) {
            if ((numbers[i] % 2) == 1) {
                arr.push(numbers[i]);
            }
        }
        for (let i in numbers) {
            if ((numbers[i] % 2) == 0) {
                arr.push(numbers[i]);
            }
        }
    }
    return arr[(k-1)%arr.length];
}