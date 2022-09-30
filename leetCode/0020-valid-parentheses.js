/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const complements = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };
    
    const arr = [];
    
    for(let i = 0; i < s.length; i++) {
        if ((/[([{]/).test(s[i])) {
            arr.push(s[i]);
        } else if (s[i] === complements[arr[arr.length - 1]]) {
            arr.pop();
        } else {
            return false;
        };
    };
    
    if (arr.length === 0) return true
    else return false;
};