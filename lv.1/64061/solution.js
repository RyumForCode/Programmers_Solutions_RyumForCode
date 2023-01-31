//First try
function solution(board, moves) {
    const arr = [];
    const queue = [];
    for (let i = 0; i < board.length; i++) {
        const tempArr = [];
        for (let j = 0; j < board.length; j++) {
            tempArr.push(board[j][i]);
        }
        arr.push(tempArr);
    }
    for (let i = 0; i < moves.length; i++) {
        if (arr[moves[i] - 1].lastIndexOf(0) < (moves.length - 1) || arr[moves[i] - 1].lastIndexOf(0) != -1) {
            queue.push(arr[moves[i] - 1][arr[moves[i] - 1].lastIndexOf(0) + 1]);
            arr[moves[i] - 1].splice((arr[moves[i] - 1].lastIndexOf(0) + 1), 1, 0);
        }
    }
    const resultArr = queue.filter(num => !(num == null));
    console.log(resultArr);
    let resultNum = 0;
    for (let i = 0; i < resultArr.length - 1; i++) {
        if (resultArr[i] == resultArr[i + 1]) {
            resultArr.splice(i, 2);
            resultNum += 2;
            i -= 2;
        }
    }
    return resultNum;
}