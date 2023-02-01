//First try
function solution(arr1, arr2) {
    return arr1.map((group, index) => group.map((ele, i) => group[i] + arr2[index][i]));
}