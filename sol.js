function solution(board) {
    const boardArr = [...board];
    const len = board.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (boardArr[i][j] == 1) {
                for (let k = 0; k <= 2; k++) {
                    for (let l = 0; l <= 2; l++) {
                        if (boardArr[i + k - 1][j + l - 1] != 1 || boardArr[i + k - 1][j + l - 1] != 2) {
                            console.log(boardArr[i + k][j + l]);
                        }
                    }
                }
            }
        }
    }
    return answer;
}

const board = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]];

solution(board);