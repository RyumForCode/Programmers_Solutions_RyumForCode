//First try - succeed
function solution(answers) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    const p1Arr = [1, 2, 3, 4, 5];
    const p2Arr = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3Arr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == p1Arr[i%p1Arr.length]) {
            p1++;
        }
        if (answers[i] == p2Arr[i%p2Arr.length]) {
            p2++;
        }
        if (answers[i] == p3Arr[i%p3Arr.length]) {
            p3++;
        }
    }
    if (p1 == p2 && p2 == p3) {
        return [1, 2, 3];
    } else if (p1 == p2 && p3 < p1) {
        return [1, 2];
    } else if (p1 == p3 && p2 < p1) {
        return [1, 3];
    } else if (p2 == p3 && p1 < p2) {
        return [2, 3];
    } else {
        return [[p1, p2, p3].indexOf([p1, p2, p3].sort((a, b) => b - a)[0]) + 1];
    }
}

//Second Try, Simplify
function solution(answers) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    const p1Arr = [1, 2, 3, 4, 5];
    const p2Arr = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3Arr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] == p1Arr[i%p1Arr.length]) {
            p1++;
        }
        if (answers[i] == p2Arr[i%p2Arr.length]) {
            p2++;
        }
        if (answers[i] == p3Arr[i%p3Arr.length]) {
            p3++;
        }
    }
    const max = Math.max(p1, p2, p3);
    const arr = [];
    if (p1 == max) arr.push(1);
    if (p2 == max) arr.push(2);
    if (p3 == max) arr.push(3);
    return arr;
}