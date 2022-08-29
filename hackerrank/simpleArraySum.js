function simpleArraySum(ar) {
    let total = 0;
    ar.forEach(n => total += n);
    return total;
}

let arr = [ 1,2,3 ];

simpleArraySum(arr);