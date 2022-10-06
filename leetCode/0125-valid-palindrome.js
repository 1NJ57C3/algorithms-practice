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

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

/**
 * @param {string} s
 * @return {boolean}
 */

// Objective
// Palindrome reads the same forwards and backwards when:
//   - All letters should be converted into lower case
//   - Alphanumeric characters only
//     - Remove spaces and special characters

// Solution 
//   Trim punctuation/special characters/spaces out
//   .toLowerCase()
//   Split string into array
//   iterate through halves of array
//     compare front to back [0,length-1] => [1, length-2] => etc.
//     return false if mismatch found
//   return true if everything matches when both pointers meet

// Edge case(s)
//   single valid character => true
//   empty string => true

var isPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return true;
    
    const arr = s.toLowerCase().replaceAll(/[^A-Z0-9]/gi, '').split('');
    
    for (let i = 0, j = arr.length - 1; i <= arr.length / 2, j >= arr.length / 2; i++, j--) {
        if (arr[i] !== arr[j]) return false;
    }
    
    return true;
};

// Big O
//   Time Complexity
//     O(n) => .replaceAll, .split, and my loop all iterate through entire length of string once each in worst case, without nesting/exponential increase
//   Space Complexity
//     O(n) => In the worst case, length of `s`tring or (n) is stored in `arr` variable