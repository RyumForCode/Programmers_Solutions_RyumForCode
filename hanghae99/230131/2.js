function solution(arr1, arr2){
	let answer = arr1.map((val, index) => {
        if (arr2[index] >= 29) {
            return 21 - val;
        } else if (arr2[index] < 29) {
            return arr2[index] - val;
        }
    }).reduce((acc, cur) => acc + cur);
	return answer;
}

// * Test Case - 1
// let arr1 = [9, 9, 8, 8, 7, 8, 9];
// let arr2 = [21, 25, 30, 29, 22, 23, 30];

// * Test Case - 2
// let arr1 = [9, 7, 8, 9, 7, 9, 8];
// let arr2 = [23, 22, 26, 26, 29, 27, 22];

// * Test Case - 3  ** Test input **
let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];

console.log(solution(arr1, arr2))