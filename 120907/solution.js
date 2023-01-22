//First try
function solution(quiz) {

    let answer = [];
    
    for (let i = 0; i < quiz.length; i++) {
        let firstTerm = Number(quiz[i].split(' ')[0]);
        let secondTerm = Number(quiz[i].split(' ')[2]);
        let arithmatic = quiz[i].split(' ')[1];
        let result = quiz[i].split(' ')[4];
        
        if (arithmatic == '+') {
            if (result == (firstTerm + secondTerm)) {
                answer.push('O');
            } else {
                answer.push('X');
            }
        } else if (arithmatic == '-') {
            if (result == (firstTerm - secondTerm)) {
                answer.push('O');
            } else {
                answer.push('X');
            }
        }
    }
    return answer;
}