/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hashMap = {};
    let duplicate = false;
    for (let i=0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1 ;
        if (hashMap[nums[i]] > 1) {
            return duplicate = true;
        }
    }
    return duplicate
};

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hashMap = {};
    for (let i=0; i < nums.length; i++) {
        hashMap[nums[i]] = hashMap[nums[i]] + 1 || 1 ;
        if (hashMap[nums[i]] > 1) {
            return true;
        }
    }
    return false
};