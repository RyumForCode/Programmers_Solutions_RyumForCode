function solution(s){
	const arr = s.split(' ').sort((a, b) => a - b);
	const primeResult = [];
	const notPrimeResult = [];
	for (let i = 0; i < arr.length; i++) {
		const tempArr = [];
		for (let j = 2; j <= arr[i]; j++) {
			if (arr[i] % j == 0) {
				tempArr.push(j);
			}
		}
		if (tempArr.length == 1) {
			primeResult.push(arr[i]);
		} else if (tempArr.length > 1) {
			notPrimeResult.push(arr[i]);
		}
	}
	let answer = notPrimeResult[0] + ' ' + primeResult[primeResult.length - 1];
	return answer;
}

// * Test Case - 1
// let s = '2 3 4 5';

// * Test Case - 2
// let s = '15 3 10 9 7 8';

// * Test Case - 3 ** Test input **
let s = '97 75 88 99 95 92 73';

console.log(solution(s))