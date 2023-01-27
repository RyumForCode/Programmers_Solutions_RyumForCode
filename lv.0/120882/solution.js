//First try - failed
function solution(score) {
    const arr = score.map(n => (n[0]+n[1])/2);
    let rank = 1;
    let cycle = 0;
    for (let i = 100; i > 10; i -= 5) {
        cycle = 0;
        while (!(arr.indexOf(i) == -1)) {
            if (cycle >= 1) {
                arr.splice(arr.indexOf(i), 1, (rank - cycle));
            } else if (cycle == 0) {
                arr.splice(arr.indexOf(i), 1, rank);   
            }
            rank++;
            cycle++;
        }
    }
    return arr;
}

//Second try - failed
function solution(score) {
    const avgArr = score.map(n => (n[0]+n[1])/2);
    const sortArr = avgArr.sort((a, b) => b - a);
    for (let i = 0; i < sortArr.length; i++) {
        while (avgArr.indexOf(sortArr[i]) >= 0) {
            avgArr.splice(avgArr.indexOf(sortArr[i]), 1, i);
        }
    }
    return avgArr;
}

//Third try - succeed
function solution(score) {
    const avgArr = score.map(n => (n[0]+n[1])/2);
    const sortArr = [...avgArr].sort((a, b) => b - a);
    sortArr.filter((num, index) => avgArr.indexOf(num) === index);
    const rankArr = [...avgArr];
    let rank = 1;
    let cycle = 0;
    for (let i = 0; i < sortArr.length; i++) {
        cycle = 0;
        while (!(rankArr.indexOf(sortArr[i]) == -1)) {
            if (cycle == 0) {
                rankArr.splice(rankArr.indexOf(sortArr[i]), 1, 'rank' + rank);
            } else {
                rankArr.splice(rankArr.indexOf(sortArr[i]), 1, 'rank' + (rank-cycle));
            }
            rank++;
            cycle++;
        }
    }
    return rankArr.map((arr) => Number(arr.replace('rank', '')));
}