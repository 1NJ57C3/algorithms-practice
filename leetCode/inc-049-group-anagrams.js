// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:
//   Input: strs = ["eat","tea","tan","ate","nat","bat"]
//   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
//   Input: strs = [""]
//   Output: [[""]]

// Example 3:
//   Input: strs = ["a"]
//   Output: [["a"]]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const output = [];
    let i = 0;
  
    // compare length and letters of each word
  
    if (strs.length < 2) return [strs]
  
    while (i < strs.length) {
      for (let value of output) {
        if (value.includes(strs[i])) strs.splice(i, 1);
      }
  
      output.push(
        strs.filter((string, j) => {
          if (string === '') {
            if (!strs[i].includes(string)) return false;
          } else {
            if (string.length === strs[i].length) {
              for (let letters of string) {
                if (!strs[i].includes(letters)) return false;
              }
              return true;
            }
          }
        })
      )
      i++;
    }
    console.log(output);
    return output;
  };
  
  const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"]
  const strs2 = ['', '']
  
  groupAnagrams(strs2);