/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// OBJECTIVE
// Given two strings, `s` and `t`, return true if `s` is a subsequence of `t`
// A `subsequence` is a sequence of characters `s` that share relative order with `t`

// SOLUTION
// two pointers - indexes `i` and `j`
// iterate through `s` using [i]
// iterate through `t` using [j]
// for each letter of `s`, seek match in `t`
// if s[i] === t[j], s[i++]
//   ex:
//   t = a h b g d c
//   s = a b b c c c
// if `i` reaches end of `s` and finds valid match, return true
// if `j` reaches end of `t` before last value of `s` is found, return false

// EDGE CASES
// s.length > t.length => return false
// Missed: s.length AND t.length are both 0 (empty strings)

var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;
    if (!s.length && !t.length) return true;
    
    for (let i = 0, j = 0; j < t.length; j++) {
        if (s[i] === t[j]) i++;
        if (i === s.length) return true;
    }
    return false;
};

// Time complexity
//   O(n) - One iteration through `t`
// Space complexity
//   O(1) - Nothing stored outside of `for loop`, two integer variables used in `for loop`