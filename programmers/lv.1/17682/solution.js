//First try
function solution(dartResult) {
    const arr = dartResult.match(/10|[0-9]|[#]|[*]|[S, D, T]/g);
    let dartPoints = dartResult.match(/10|[0-9]/g);
    const tempArr = arr.slice(1, arr.length);
    const calcChar = [];
    calcChar.push(tempArr.slice(0, tempArr.indexOf(dartPoints[1])));
    tempArr.splice(0, calcChar[0].length + 1);
    calcChar.push(tempArr.slice(0, tempArr.indexOf(dartPoints[2])));
    tempArr.splice(0, calcChar[1].length + 1);
    calcChar.push(tempArr.slice(0));
    dartPoints = dartPoints.map(Number);
    for (let i = 0; i < 3; i++) {
        if (calcChar[i][0] == 'S') {
            dartPoints[i] = dartPoints[i];
        } else if (calcChar[i][0] == 'D') {
            dartPoints[i] = dartPoints[i] ** 2;
        } else if (calcChar[i][0] == 'T') {
            dartPoints[i] = dartPoints[i] ** 3;
        }
        if (calcChar[i].length == 2) {
            if (calcChar[i][1] == '*') {
                dartPoints[i] = dartPoints[i] * 2;
                if (i > 0) {
                    dartPoints[i-1] = dartPoints[i-1] * 2;
                }
            } else if (calcChar[i][1] == '#') {
                dartPoints[i] = dartPoints[i] * -1;
            }
        }
    }
    return dartPoints.reduce((acc, cur) => acc + cur, 0);
}