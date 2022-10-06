/**
 * @param {number[]} nums
 * @return {number}
 */

// OBJECTIVE
// Calculate `pivot index` of array (nums)
// The `Pivot Index` is the index at which the sum of all numbers to the left of the index is the same as the sum of numbers to the right

// SOLUTION
// Iterate through array (nums)
//   Generate sum of numbers to the LEFT of index
//   Generate sum of numbers to the RIGHT of index
//   Compare LEFT and RIGHT
//     if L equals R, return index
//     if L and R are both falsey, return index
//     if no match found, return -1

// Edge Case
// If Array contains only one value, return value

var pivotIndex = function(nums) {
    if (nums.length <= 1) return nums[0]
    
    for (let pivotPoint = 0; pivotPoint < nums.length; pivotPoint++) {
        let leftSum = 0;
        let rightSum = 0;
        
        for (let i = 0; i < pivotPoint; i++) {
            leftSum += nums[i];
        }
        
        for (let i = pivotPoint + 1; i < nums.length; i++) {
            rightSum += nums[i];
        }
        
        if (leftSum === rightSum) return pivotPoint;
    }
    return -1;
};

// Time Complexity:
//   O(n^2) - Iterate through array (nums) once, then once more for each value of (nums)
// Space Complexity:
//   O(1) - Three recycled integer variables in `for loop`;