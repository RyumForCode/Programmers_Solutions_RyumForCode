//First try
function solution(cipher, code) {
    const arr = [...cipher];
    const cipherArr = [];
    for (let i = (code - 1); i < arr.length; i += code) {
        cipherArr.push(cipher[i]);
    }
    return cipherArr.join('');;
}