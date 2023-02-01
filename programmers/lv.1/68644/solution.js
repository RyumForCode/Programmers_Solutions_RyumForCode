//First try
function solution(numbers) {
    const arr = [];
    for (let i in numbers) {
        for(let j in numbers) {
            if (!(i == j)) {
                arr.push(numbers[i] + numbers[j]);
            }
        }
    }
    return arr.filter((num, index) => arr.indexOf(num) == index).sort((a, b) => a - b);;
}