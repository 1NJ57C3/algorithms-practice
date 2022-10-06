/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// OBJECTIVE
// Given two strings, `s` and `t`
//   Determine if `t` can be made by replacing letters in `s` while maintaining relative order
// All letters *must* be replaced

// SOLUTION
// Check length
//   if not equal, return false
// Iterate through `s` and `t` simultaneously to create a hashMap
//   Key of `s[i]` value of `t[i]`
//   Key and Value must not already exist in `hashMap`
// Iterate through `t` and create new string using hashMap to replace each character
// return new string === `t` ? true : false

// EDGE CASE
// Length of `s` and `t` is one letter each
// Letters in both, `s` and `t` are blocks of the same letters ( s: AAAA, t: BBBB)

var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false
    if (s.length === 1 && t.length === 1) return true
    
    const hashMap = {};
    let cachedString = '';
    
    for (let i = 0; i < s.length; i++) {
        if (hashMap.hasOwnProperty(s[i])) {
            cachedString += hashMap[s[i]];
        } else if (!cachedString.includes(t[i])) {
            hashMap[s[i]] = t[i];
            cachedString += hashMap[s[i]];
        }
    }
    return cachedString === t
};

// Time complexity:
//   O(n^2)
//     O(n) - Single iteration through `s` and `t` for `.length` (n) times
//     O(n^2) - Worst case: .includes() searches length of `cachedString` at every iteration of `s`
// Space complexity:
//   O(n) - hashMap stores (in worst case) `s` or `t`.length (n) amount of data
//     cachedString adds O(1), which is disregarded due to (n) in Big O