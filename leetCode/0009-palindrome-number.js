/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const y = x.toString();
    
    if (x < 0) return false;
    
    if (y.length === 1) return true;

    for (let i = 0, j = y.length - 1; i < y.length / 2; i++, j--) {
        if (y[i] !== y[j]) return false;
    }
    
    return true;
};