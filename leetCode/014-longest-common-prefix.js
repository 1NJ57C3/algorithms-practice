/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let common = strs[0].split('');
    
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i].split('');
        
        if (str.length < common.length) {
            common.splice(str.length);
        } else if (str.length > common.length) {
            str.splice(common.length);
        }
        
        for (let j = 0; j < str.length; j++) {
            if (str[j] !== common[j]) {
                common.splice(j);
                break;
            };
        }
    }

    return common.join('');
};
