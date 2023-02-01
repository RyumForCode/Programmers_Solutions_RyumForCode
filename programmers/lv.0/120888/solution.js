//First try
function solution(my_string) {
    let arr = [...my_string];
    const result = [...new Set(arr)];
    return result.join('');;
}

//Simplify
function solution(my_string) {
    return [...new Set([...my_string])].join('');;
}