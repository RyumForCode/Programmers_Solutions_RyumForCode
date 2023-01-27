//First try
function solution(my_string, letter) {
    let arr = [...my_string];
    for (let i in arr) {
          if (arr[i] == letter) {
              arr.splice(arr.indexOf(letter), 1);
          }
    }
    return arr.join('');
}

//Second try
function solution(my_string, letter) {
    const arr = [...my_string];
    let index = arr.indexOf(letter);
    for (let i = 0; i < [...my_string].length; i++) {
        if (index == i && index != -1) {
            arr.splice(index, 1);
            index = arr.indexOf(letter);
        }
    }
    return arr.join('');
}

//Third try
//The problem was, when I pass the indexOf() method, it can be pass between arr.indexOf(letter) and i.
function solution(my_string, letter) {
    const arr = [...my_string];
    let index = arr.indexOf(letter);
    for (let i = 0; i < [...my_string].length; i++) {
        if (index == i && index != -1) {
            arr.splice(index, 1);
            index = arr.indexOf(letter);
            i--;
        }
    }
    return arr.join('');
}