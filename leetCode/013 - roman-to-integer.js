/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // /* Solution 1 */
    // const symbolValues = {
    //     I: 1,
    //     V: 5,
    //     X: 10,
    //     L: 50,
    //     C: 100,
    //     D: 500,
    //     M: 1000
    // };
    
    // let conversion = 0;
    
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] === 'I' && s[i+1] === 'V' 
    //         || s[i] === 'I' && s[i+1] === 'X'
    //         || s[i] === 'X' && s[i+1] === 'L' 
    //         || s[i] === 'X' && s[i+1] === 'C'
    //         || s[i] === 'C' && s[i+1] === 'D' 
    //         || s[i] === 'C' && s[i+1] === 'M') {
    //         conversion -= symbolValues[s[i]];
    //     } else {
    //         conversion += symbolValues[s[i]];
    //     }
    // }
    
    // return conversion;

    /* Solution 2 */
    const symbolValues = {
        I: 1,
        IV: 4,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    };
    
    let conversion = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (symbolValues[s[i]+s[i+1]]) {
            conversion += symbolValues[s[i]+s[i+1]];
            i++;
        } else {
            conversion += symbolValues[s[i]];
        }
    }
    
    return conversion;
};