//First try
function solution(participant, completion) {
    const partArr = [...participant].sort();
    const comlArr = [...completion].sort();
    for (let i = 0; i < participant.length; i++) {
        if (!(partArr[i] == comlArr[i])) {
            return partArr[i];
        }
    }
}