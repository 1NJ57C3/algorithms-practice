/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const sMap = {};
    const tMap = {};
    // edge case: compare lengths of s and t
    if (s.length !== t.length) {
        return false;
    };
    // iterate through s and t
    for (let i=0; i < s.length; i++) {
        // map out instances of each letter
        sMap[s[i]] = sMap[s[i]] + 1 || 1
        tMap[t[i]] = tMap[t[i]] - 1 || -1
    }
    // compare instances for sameness
    // Plan A
    // iterate through tMap and subtract from sMap
    for (let j=0; j < t.length; j++) {
        if (!!sMap[t[j]]) {
            sMap[t[j]] = sMap[t[j]] - 1
        } else {
            return false
        }
    }
    // Plan B
    // combine sMap and tMap
    const checkMaps = {...sMap, ...tMap}
    // check values of sMap - if all zero, return true
    // for (const key in sMap) {
    for (const key in checkMaps) {
        if (sMap[key] !== 0) {
            return false
        }
        return true
    }
};

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const sMap = {};
    // const tMap = {};
    // edge case: compare lengths of s and t
    if (s.length !== t.length) {
        return false;
    };
    // iterate through s and t
    for (let i=0; i < s.length; i++) {
        // map out instances of each letter
        sMap[s[i]] = sMap[s[i]] + 1 || 1
        // tMap[t[i]] = tMap[t[i]] - 1 || -1
    }
    // compare instances for sameness
    // Plan A
    // iterate through tMap and subtract from sMap
    for (let j=0; j < t.length; j++) {
        if (!!sMap[t[j]]) {
            sMap[t[j]] = sMap[t[j]] - 1
        } else {
            return false
        }
    }
    // Plan B
    // combine sMap and tMap
    // const checkMaps = {...sMap, ...tMap}
    // check values of sMap - if all zero, return true
    for (const key in sMap) {
    // for (const key in checkMaps) {
        if (sMap[key] !== 0) {
            return false
        }
        return true
    }
};

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    const sMap = {}
    // edge case: compare lengths of s and t
    if (s.length !== t.length) {
        return false
    }
    // iterate through s
    for (let i=0; i < s.length; i++) {
        // map out instances of each letter
        sMap[s[i]] = sMap[s[i]] + 1 || 1
    }
    // compare instances for sameness
    // iterate through t and subtract from sMap
    for (let j=0; j < t.length; j++) {
        if (!!sMap[t[j]]) {
            sMap[t[j]] = sMap[t[j]] - 1
        } else {
            return false
        }
    }
    // check values of sMap - if all zero, return true
    for (const key in sMap) {
    // for (const key in checkMaps) {
        if (sMap[key] !== 0) {
            return false
        }
    }
    // if all false checks fail, then this must be true
    return true
};