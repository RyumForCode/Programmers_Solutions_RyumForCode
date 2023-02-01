//First try
function solution(nums) {
    const arr = [...nums].sort((a, b) => a - b);
    const singleNumArr = arr.filter((val, index) => arr.indexOf(val) == index);
    const forSortArr = [];
    let result = 0;
    for (let i = 0; i < singleNumArr.length; i++) {
        forSortArr.push(arr.slice(arr.indexOf(singleNumArr[i]), arr.lastIndexOf(singleNumArr[i]) + 1));
    }
    forSortArr.sort((a, b) => a.length - b.length);
    if (forSortArr.length >= nums.length/2) {
        result = nums.length/2;
    } else {
        result = forSortArr.length;
    }
    return result;
}

//Simplify
function solution(nums) {
    const arr = [...new Set(nums)];
    return arr.length >= nums.length/2 ? nums.length/2 : arr.length;
}