//First try
function solution(nums) {
    const arr = [];
    const resultArr = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                if(!(i == j || i == k || j == k)) {
                    arr.push(nums[i] + nums[j] + nums[k]);
                }
            }
        }
    }
    const sumArr = arr.sort((a, b) => a - b);
    console.log(sumArr);
    let testArr = [];
    for (let i in sumArr) {
        testArr = [];
        for (let j = 2; j <= sumArr[i]; j++) {
            if (sumArr[i] % j == 0) {
                testArr.push(j);
            }
        }
        if (testArr.length == 1) {
            resultArr.push(sumArr[i]);
        }
    }
    return resultArr.length;
}