function solution(str){
    const arr = str.split('');
    let answer = 0;
    let counter = 0;
	for (let i = 0; i < arr.length; i++) { 
        if (arr[i] == 'O') {
            counter += 1;
        } else if (arr[i] == 'X') {
            counter = 0;
        }
        answer += counter;
    }
    return answer;
}

// * Test case 1, answer 10
// let str = 'OOXXOXXOOO'

// * Test case 2, answer 7
// let str = 'OXOXOXOXOXOXOX'

// * Test case 3, answer 55
// let str = 'OOOOOOOOOO'

// * Test case 4, answer 27 ** Test input **
let str = "OXOOOXXXOXOOXOOOOOXO";

console.log(solution(str));