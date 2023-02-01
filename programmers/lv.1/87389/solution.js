//First try
function solution(n) {
    let counter = 1;
    while (n % counter != 1) {
        counter++;
    }
    return counter;
}