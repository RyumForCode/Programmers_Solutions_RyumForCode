//First try
function solution(d, budget) {
    let budg = budget;
    let counter = 0;
    const arr = d.sort((a, b) => a - b);
    while ((budg - arr[counter]) >= 0) {
        budg = budg - arr[counter];
        counter++;
    }
    return counter;
}