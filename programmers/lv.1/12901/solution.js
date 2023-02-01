//First try
function solution(a, b) {
    const arr = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    const theDay = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
    let days = 0;
    for (let i = 0; i < a; i++) {
        days += arr[i];
    }
    days += b;
    return theDay[(days-1)%7];
}