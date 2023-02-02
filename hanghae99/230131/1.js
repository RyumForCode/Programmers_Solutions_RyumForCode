function solution(month, day){
    const monthCounter = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31, 31, 28, 31, 30];
	let dayCalc = monthCounter.slice(0, month).reduce((acc, cur) => acc + cur) + day + 98;
    let monthCalc = 0;
    while (dayCalc > monthCounter[monthCalc + 1]) {
        dayCalc -= monthCounter[monthCalc];
        monthCalc++;
    }
    if (monthCalc > 12) {
        monthCalc -= 12;
    }
    let result = monthCalc + '월 ' + dayCalc + '일';
	return result;
}

// * Test Case - 1
// month = 11;
// day = 27;

// * Test Case - 2
// month = 6;
// day = 22;

// * Test Case - 3 ** Test input **
month = 1;
day = 18;

// * Test Case - 4
// month = 12;
// day = 31;

// * Test Case - 5
// month = 1;
// day = 1;

console.log(solution(month, day))