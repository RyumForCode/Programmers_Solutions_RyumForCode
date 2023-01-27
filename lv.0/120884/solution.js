//First try
function solution(chicken) {
    let coupon = chicken;
    let serChi = 0;
    while (coupon >= 10) {
        serChi += parseInt(coupon/10);
        coupon = parseInt(coupon/10) + (coupon%10);
    }
    return serChi;
}

//Simplify
function solution(coupon) {
    let serChi = 0;
    while (coupon >= 10) {
        serChi += parseInt(coupon/10);
        coupon = parseInt(coupon/10) + (coupon%10);
    }
    return serChi;
}