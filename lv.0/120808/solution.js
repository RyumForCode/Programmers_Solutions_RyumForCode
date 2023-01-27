//First try
function solution(numer1, denom1, numer2, denom2) {
    const common_factor_1 = [1];
    const common_factor_2 = [1];
    const common_factor_list = [];
    for (let i = 2; i <= denom1; i++) {
        if (denom1 % i === 0) {
            common_factor_1.push(i);
        }
    }
    for (let i = 2; i <= denom2; i++) {
        if (denom2 % i === 0) {
            common_factor_2.push(i);
        }
    }
    for (let i = 0; i < common_factor_1.length; i++) {
        for (let j = 0; j < common_factor_2.length; j++) {
            if(common_factor_1[i] == common_factor_2[j]) {
                common_factor_list.push(common_factor_1[i]);
                break;
            }
        }
    }
    const gcd = Math.max(...common_factor_list);
    const lcm = ((denom1*denom2)/gcd)
    const result = [((numer1*(lcm/denom1))+(numer2*(lcm/denom2))), lcm]
    return result;
}

//Second try
function solution(numer1, denom1, numer2, denom2) {
    const chiNum = (numer1 * denom2) + (numer2 * denom1);
    const parNum = denom1 * denom2;
    let maxNum = 1;
    for (let i = 1; i <= parNum; i++) {
        if ((chiNum % i) == 0 && (parNum % i) == 0) {
            maxNum = i;
        }
    }
    let answer = [chiNum/maxNum, parNum/maxNum];
    return answer;
}