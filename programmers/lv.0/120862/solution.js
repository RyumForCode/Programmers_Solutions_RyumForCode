//First try
function solution(numbers) {
    numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
    const arr = [];
    arr.push(numbers[numbers.length-1]*numbers[numbers.length-2]);
    arr.push(numbers[numbers.length-2]*numbers[numbers.length-3]);
    arr.push(numbers[numbers.length-1]*numbers[numbers.length-3]);
    arr.sort((a, b) => a - b)
    return arr[2];
}

//Second try
function solution(numbers) {
    numbers.sort((a, b) => Math.abs(a) - Math.abs(b))
    const arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (!(i == j)) {
                arr.push(numbers[i] * numbers[j]);
            }
        }
    }
    arr.sort((a, b) => a - b)
    return arr[arr.length-1];
}