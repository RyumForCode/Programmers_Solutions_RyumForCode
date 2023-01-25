//First try
function solution(numlist, n) {
    numlist.sort((a, b) => a - b);
    return numlist.sort((a, b) => {
        if ((Math.abs(n - a) - Math.abs(n - b)) > 0) {
            return 1;
        } else {
            return -1;
        }
    });
}