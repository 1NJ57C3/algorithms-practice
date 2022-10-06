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

/* ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Description
//   return true if a value appears more than once in array
//   return false if no duplicate is found

// Brute Force
//   Iterate through nums
//   Compare nums[i] to rest of values

// Optimization
//   Remove nested iterator
//   Store values iterated through into hashMap
//   Access hashMap to check for existence of value

var containsDuplicate = function(nums) {
    /* SOLUTION A - Brute Force */
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) return true;
    //     }
    // }
    // return false;
    
    /* Time Complexity
       O(n^2) because iterates through nums twice */
    /* Space Complexity
       O(1) - Nothing is stored */
    
    /* SOLUTION B - Optimized */
    const hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]]) {
            return true;
        } else {
            hashMap[nums[i]] = true;
        }
    }
    
    return false;
    
    /* Time Complexity
       O(n) because only one iteration through length of array */
    /* Space Complexity
       O(n) because in worst case, same number of instances in object as array */
};