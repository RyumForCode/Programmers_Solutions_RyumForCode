//First try
function solution(hp) {
    const largeAntStr = 5;
    const middleAntStr = 3;
    if (hp%largeAntStr == 0) {
        return hp/largeAntStr
    } else {
        return ((parseInt(hp/largeAntStr) + parseInt((hp%largeAntStr)/middleAntStr)) + ((hp%largeAntStr)%middleAntStr));
    }
}