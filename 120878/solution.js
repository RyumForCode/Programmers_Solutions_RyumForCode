//First try
function solution(a, b) {
    let aNum = a;
    let bNum = b;
    const arr = [1];
    for (let i = 2; i <= b; i++) {
        while (aNum%i == 0 && bNum%i == 0) {
            aNum = aNum/i;
            bNum = bNum/i;
            arr.push(i);
        }
    }
    let gcd = arr.reduce((acc, cur) => acc * cur);
    let num = b/gcd;
    const arr2 = [];
    for (let i = 2; i <= (b/gcd); i++) {
        while (num % i == 0) {
            arr2.push(i);
            num /= i;
        }
    }
    const arr3 = arr2.filter(arrNum => !(arrNum == 2) && !(arrNum == 5));
    if (arr3.length > 0) {
        return 2;
    } else {
        return 1;
    }
}