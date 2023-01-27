//First try
function solution(bin1, bin2) {
    const arr1 = [...bin1].reverse();
    const arr2 = [...bin2].reverse();
    let num1 = 0;
    let num2 = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == 1) {
            num1 += (2**(i-1));
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] == 1) {
            num2 += (2**(i-1));
        }
    }
    return String((num1 + num2).toString(2)*10);
}

//Second try, Simplify
function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2);
}