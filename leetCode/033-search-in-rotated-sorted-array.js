/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var search = function(nums, target) {
    // // SOLUTION A - indexOf
    // return nums.indexOf(target);
    
    // SOLUTION B - Recursion
    // if (!nums.includes(target)) {
    //     return -1;
    // } else {
    //     return (function recursively(i=nums.length) {
    //         if(nums[i] === target) {
    //             return i
    //         } else {
    //             return recursively(i-1)
    //         }
    //     })()
    // }
    
//     // Lance Phonebook Translation
//     const mid = Math.floor(nums.length/2);
//     const start = nums[0];
//     const end = nums[nums.length-1];
    
//     if (!nums.includes(target)) {
//         return -1
//     } else if (mid === target) {
//         return mid;
//     } else if (target > start && target < mid) {
//         for (let i=0; i < mid; i++) {
//             if (nums[i] === target) return i;
//         }
//     } else {
//         for (let i=mid+1; i < nums.length; i++) {
//             if (nums[i] === target) return i;
//         }
//     }

// ! FAILURE
    // function recursively(mid = Math.floor(nums.length/2), left = 0, right = nums.length-1) {
    //     if (nums[mid] === target) {
    //         return mid;
    //     } else if (target < nums[mid]) {
    //         return recursively(Math.floor(mid/2), left, mid);
    //     } else {
    //         return recursively(mid+Math.floor((right-mid)/2), mid, right);
    //     }
    // };

    // return nums.includes(target) ? recursively() : -1;
// };

// * SUCCESS
var search = function(nums, target) {
  function recursively(mid = Math.floor(nums.length / 2), left = 0, right = nums.length - 1) {
    // console.log('New cycle');
    // console.log('  M:', mid, 'Val:', nums[mid]);
    // console.log('  L:', left, 'Val:', nums[left]);
    // console.log('  R:', right, 'Val:', nums[right]);
    // console.log();
    
    if (nums[mid] === target) {
      // console.log('Bingo!');
      // console.log('  M:', mid, ' Val:', nums[mid]);
      console.log("Found in", recurrences, "moves");
      moves.push(recurrences)
      recurrences = 0;
      return mid;
    } else if (
      left === right
      // || (nums.length === 2 && nums[left] < target && target < nums[right])
      || (mid === left || mid === right && target !== nums[left] && target !== nums[right])
    ) {
    // } else if (left === right || mid === left || mid === right) {
      console.log('Womp Womp!');
      return -1;
    } else if (
      target < nums[mid] && nums[mid] <= nums[right]
      // 7,8,[1,2],3,4,5,6  &&  3 < 6
      || target < nums[mid] && nums[right] < target
      // [3,4,5,6],7,8,1,2  &&  T > 2
      || nums[right] < target && nums[mid] <= nums[right]
      // [7,8],1,2,3,4,5,6  &&  3 < 6
    ) {
      // console.log('Hit, L');
      // console.log();
      recurrences++;
      return recursively(Math.floor((left + mid) / 2), left, mid);
      // return recursively(Math.floor(mid / 2), left, mid);
      
    } else {
      // console.log('Hit, R');
      // console.log();
      recurrences++;
      return recursively(Math.ceil((mid + right) / 2), mid, right);
      // return recursively(Math.ceil(mid * 1.5), mid, right);
      
    // } else {
    //   console.log('BAW!');
    //   return -1;
    }
  };

  return recursively();
  // return nums.includes(target) ? recursively() : -1;
};

const arr1 = [7, 8, 1, 2, 3, 4, 5, 6];
const arr2 = [4, 5, 6, 7, 0, 1, 2];
const arr3 = [3, 4, 5, 6, 7, 8, 1, 2];
const arr4 = [1, 2, 3, 4, 5, 6, 7];
const arr5 = [1, 3]
const arr6 = [1, 3]
const arr7 = [1, 3, 5]
const target1 = 2;
const target2 = 0;
const target3 = 6;
const target4 = 5;
const target5 = 1;
const target6 = 2;
const target7 = 2;
let recurrences = 0;
let moves = [];

// console.log('Array 1:', arr1, ', Target:', target1)
// console.log();
// search(arr1, target1);
// console.log('===============================');
// console.log('Array 2:', arr2, ', Target:', target2)
// console.log();
// search(arr2, target2);
// console.log('===============================');
// console.log('Array 3:', arr3, ', Target:', target3)
// console.log();
// search(arr3, target3);
// console.log('===============================');
// console.log('Array 4:', arr4, ', Target:', target4)
// console.log();
// search(arr4, target4);

const allArr = [arr1, arr2, arr3, arr4, arr5, arr6, arr7];
let count = 1;

allArr.forEach(arr => {
  arr.forEach(val => {
    console.log('========================');
    // console.log('Array:',arr);
    // console.log();
    // console.log('Target:',val);
    console.log();
    console.log('Simulation Number',count);
    console.log();
    search(arr, val);
    console.log();
    count++;
  });
});

// console.log('Average Moves to Target:', moves.reduce((a,b) => a + b) / count);

// search([1,3], 2);
// search(arr2, 3);

// search(arr5, 2)

// search(arr7, target7)