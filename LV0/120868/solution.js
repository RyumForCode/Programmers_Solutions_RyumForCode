//First try
function solution(sides) {
    return ((sides[1] + sides[0]) - Math.abs(sides[1] - sides[0]) - 1);
}