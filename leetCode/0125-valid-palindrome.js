/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // convert letters to lower case
    // remove non alphanumeric characters
    const t = s.toLowerCase().replace(/\W|_/g,'')
    // letters should be mirrored from center
    // iterate from both, left and right
    let l = 0
    let r = t.length-1
    for (l; l <= r; l++) {
        for (r; r >= l; r--) {
            //compare left and right
            if (t[l] === t[r]) {
                l++
            } else {
                return false
            }
        }
    }
    return true
};

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // convert letters to lower case
    // remove non alphanumeric characters
    const t = s.toLowerCase().replace(/\W|_/g,'')
    // letters should be mirrored from center
    // iterate from both, left and right
    let l = 0
    let r = t.length-1
    for (l; l < r; l++) {
        for (r; r > l; r--) {
            //compare left and right
            if (t[l] === t[r]) {
                l++
            } else {
                return false
            }
        }
    }
    return true
};

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    // convert letters to lower case
    // remove non alphanumeric characters
    const t = s.toLowerCase().replace(/\W|_/g,'')
    // letters should be mirrored from center
    // iterate from both, left and right
    let l = 0
    let r = t.length-1

    for (r; r > l; r--) {
        //compare left and right
        if (t[l] === t[r]) {
            l++
        } else {
            return false
        }
    }
    return true
};