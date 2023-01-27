//First try
function solution(num_list, n) {
    const arr = [...num_list];
    let answer = [];
    for (let i = 0; i < (num_list.length/n); i++) {
        const pushArr = [];
        for (let j = 0; j < n; j++) {
            pushArr.push(arr.shift());
        }
        answer.push(pushArr);
    }
    return answer;
}

//Simplify
function solution(num_list, n) {
    var answer = [];
    while(num_list.length) {
        answer.push(num_list.splice(0, n));
    }
    return answer;
}