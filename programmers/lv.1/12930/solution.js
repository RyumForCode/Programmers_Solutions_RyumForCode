//First try
function solution(s) {
    const arr = s.split(' ').map(el => el.split(''));
    for (let i in arr) {  
        for (let j = 0; j < arr[i].length; j ++) {
            if (j%2 == 0) {
                arr[i][j] = arr[i][j].toUpperCase();
            } else {
                arr[i][j] = arr[i][j].toLowerCase();
            }
        }
        arr[i] = arr[i].join('');
    }
    return arr.join(' ');
}