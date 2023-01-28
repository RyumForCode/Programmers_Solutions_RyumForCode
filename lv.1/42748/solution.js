//First try
function solution(array, commands) {
    const arr = [];
    for (let i = 0; i < commands.length; i++) {
        const slicedArr = array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b);
        console.log(slicedArr);
        arr.push(slicedArr[commands[i][2]-1]);
    }
    return arr;
}