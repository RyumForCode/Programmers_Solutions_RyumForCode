//First try
function solution(lottos, win_nums) {
    const zeroCount = lottos.filter(num => num == 0).length;
    const lottosArr = [...lottos].filter(num => !(num == 0)).sort((a, b) => a - b);
    const win_numsArr = [...win_nums].sort((a, b) => a - b);
    const interNum = lottosArr.filter(num => win_numsArr.includes(num)).length
    
    if (interNum >= 1) {
        return [7 - (interNum + zeroCount), 7 - interNum];
    } else if (zeroCount == 6) {
        return [1, 6];
    } else if (zeroCount == 0 && interNum == 0) {
        return [6, 6];
    }
}