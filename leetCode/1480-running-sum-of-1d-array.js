/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 1480. Running Sum of 1d Array

// Objective:
// Given an array (nums) return an array of sums of each index value with preceeding values

// Solution
// Iterate through array (nums) from left to right
// Replace value of index 1 with sum of index 0 and itself (running sum)
// Replace value of index 2+ with sum of itself and "running sum"
// Store running sum in variable

// Edge cases
// Length of array (nums) is one - Return itself
// Length of array cannot be zero as per constraints

var runningSum = function(nums) {
    if (nums.length === 1) return nums;
    
    let sum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
        nums[i] = sum;
    }
    
    return nums;
};

// Time Complexity:
// O(n) - One iteration through nums (n)

// Space Complexity:
// O(1) - One variable of single integer stored