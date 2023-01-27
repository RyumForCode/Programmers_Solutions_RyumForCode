//Fisrt try - denied but success only example solution
function solution(strings, n) {
    let answer = strings.map(a => a[n] + a).sort().map(a => a.substring(1));
    return answer;
}

//Second try - denied but success only example solution
function solution(strings, n) {
    let letterArr = [];
    let answer = [];
    
    for (let i = 0; i < strings.length; i++) {
        let key = strings[i].substring(n);
        let value = strings[i]
        let obj = {key : key, value : value};
        letterArr.push(obj);
    }
    letterArr.sort(function(a, b) {
        if (a.key > b.key) {return 1;} else {return -1;};
    })
    for (let i = 0; i < strings.length; i++) {
        answer.push(letterArr[i].value);
    }
    
    return answer;
}

//Third try - completely denied
function solution(strings, n) {
    let answer = [];
    answer = strings.sort(function(a,b) {a.substring(n) > b.substring(n) ? 1 : -1});
    return answer;
}

//Fourth try - solved
function solution(strings, n) {
    let answer = strings.map(a => a[n] + a).sort().map(a => a.substring(1));
    return answer;
}