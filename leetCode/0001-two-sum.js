/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    //     // nums : array of integers
    //     // target : integer
    
    //     // Brute Force
    //     // iterate through nums
    //     for (let i = 0; i < nums.length; i++) {
    //         // for each index of nums, subtract from target
    //         let diff = target-nums[i]
    //         // if difference of target-nums[i] is in rest of array, return indeces of both numbers
    //         // iterate rest of array
    //         for (let j = i+1; j < nums.length; j++) {
    //             // if difference exists in rest of array, return indeces i and j
    //             if (nums[j] === diff){
    //                 return [i,j]
    //             }
    //         }
    //     }
        
        let hashMap = {}
        let diff
        // iterate through nums
        for (let i=0; i < nums.length; i++) {
            // map out array while checking for existence of diff
            diff = target-nums[i];
            // if diff exists in hashMap as a key, return array of indeces
            if (diff in hashMap) {
                return [i, hashMap[diff]]
            }
            // desired result not met, so map value and index into hash before repeating
            hashMap[nums[i]] = i
        }
    };