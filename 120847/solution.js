//First try
function solution(numbers) {
    const sortNum = numbers.sort((a,b) => a - b);
    return (sortNum.slice(-1)*(sortNum[numbers.length-2]));
}