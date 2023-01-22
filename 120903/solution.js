//First try
function solution(s1, s2) {
    const arr = [];
    for (let i in s1) {
        for (let j in s2) {
            if (s1[i] == s2[j]) arr.push(s1[i]);
        }
    }
    return arr.length;
}