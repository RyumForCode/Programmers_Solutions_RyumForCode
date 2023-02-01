//First try
function solution(before, after) {
    return [...before].reverse().sort().join('') == [...after].sort().join('') ? 1 : 0;;
}