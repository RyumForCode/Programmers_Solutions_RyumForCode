//First try
function solution(keyinput, board) {
    let xAxis = 0;
    let yAxis = 0;
    for (let i in keyinput) {
        switch (keyinput[i]) {
            case 'up':
                yAxis++;
                break;
            case 'down':
                yAxis--;
                break;
            case 'right':
                xAxis++;
                break;
            case 'left':
                xAxis--;
                break;
        }
        if (xAxis < (board[0]-1)/2 * -1) {
            xAxis = (board[0]-1)/2 * -1;
        } else if (xAxis > (board[0]-1)/2) {
            xAxis = (board[0]-1)/2;
        }
        if (yAxis < (board[1]-1)/2 * -1) {
            yAxis = (board[1]-1)/2 * -1;
        } else if (yAxis > (board[1]-1)/2) {
            yAxis = (board[1]-1)/2;
        }
    }
    return [xAxis, yAxis];
}