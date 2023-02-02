function solution(N, arr1){
    // 기준 좌표의 주위 좌표를 구하기 위한 배열
	let x = [1, -1, 0, 0, 1, 1, -1, -1];
	let y = [0, 0, 1, -1, 1, -1, 1, -1];

    // 깊은 복사(첫 번째는 if문이 돌 때 확인하는 용도의 배열, 두 번째는 실제로 바꿀 배열 / 배열을 검사하면서 바꾸면 바꿔진 값을 다시 검사해서 오류가 날 수 있음)
    const arr = arr1.map(v => [...v]);
    const resultArr = arr1.map(v => [...v]);

    // 결과 배열에 숫자들을 모두 '*'로 바꾸는 작업
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (!isNaN(resultArr[i][j])) {
               resultArr[i].splice(j, 1, '*') 
            }
        }
    }

    // 지뢰가 아닌 곳 기준으로 주변의 모든 지뢰의 수를 더하여 결과 배열 해당 칸에 할당
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            let tempSum = 0;
            if (arr[i][j] == '.') {
                for (let k = 0; k < 8; k++) {
                    if (i + x[k] >= 0 && j + y[k] >= 0 && i + x[k] < N && j + y[k] < N) {
                        xAxis = i + x[k];
                        yAxis = j + y[k];
                        if (!(isNaN(arr[xAxis][yAxis]))) {
                            tempSum += Number(arr[xAxis][yAxis]);
                        }
                    }
                }
            }
            if (resultArr[i][j] != '*') {
                if (tempSum > 9) {
                    resultArr[i].splice(j, 1, 'M');
                } else {
                    resultArr[i].splice(j, 1, tempSum);
                }
            }
        }
    }

    // 결과 배열 내부의 값은 '*'과 'M'이 문자열이므로 출력될 때 각각 문자열이 아닌 상태로 출력
	return '[[' + resultArr.join('], [') + ']]';
}


// * Test case 1
// let N = 4; 
// let arr1 = [['2', '.', '.', '.'],        
//             ['.', '.', '9', '.'],        
//             ['.', '3', '.', '2'],        
//             ['.', '4', '.', '.']];

// * Test case 2
let N = 5;
let arr1 = [['1', '.', '.', '.', '.'], 
		['.', '.', '3', '.', '.'], 
		['.', '.', '.', '.', '.'],
		['.', '4', '.', '.', '.'], 
		['.', '.', '.', '9', '.']]; 


console.log(solution(N, arr1))