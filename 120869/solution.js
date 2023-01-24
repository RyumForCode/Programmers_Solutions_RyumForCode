//First try - failed
function solution(spell, dic) {
    const str = spell.reduce((acc, cur) => '(?=.*' + cur + ')' + acc, '.*');
    const regex = new RegExp(str, 'g');
    let num = 0;
    console.log(regex)
    for (let i in dic) {
        if (regex.test(dic[i])) {
            num++;   
        }
    }
    return num;
}

//Second try - succeed
function solution(spell, dic) {
    const str = spell.reduce((acc, cur) => '(?=.*' + cur + ')' + acc, '.*');
    const regex = new RegExp(str, 'g');
    let num = 0;
    console.log(regex)
    for (let i in dic) {
        if (regex.test(dic[i])) {
            num++;
        }
    }
    if (num >= 1) {
        return 1;
    } else {
        return 2;
    }
}