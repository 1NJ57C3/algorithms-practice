/**
 * @param {string} s
 * @return {string}
 */

// OBJECTIVE
// Given a string `s`, reverse the order of characters in each word whilst maintaining relative order and spaces
//   s contains at least one word
//   All words in `s` are separated by a single space (' ')

// SOLUTION
// `split()` `s` by whitespaces (either /\s/g or ' ')
// iterate through each word, build and return new reversed string with iteration and concatenation
// return split and modified array after `join()`ing

// EDGE CASE(S)
// `s` is a single-letter word
// 's' does not contain spaces

var reverseWords = function(s) {
    if (s.length === 1) return s
    
    function reverseWord(word, n = word.length-1) {
        return n === 0 ? word[n] : word[n] + reverseWord(word, n-1);
    }
    
    function reversePhrase() {
        let splitStr = s.split(/\s/g);
        
        for (let i = 0; i < splitStr.length; i++) {
            splitStr[i] = reverseWord(splitStr[i]);
        }
        
        return splitStr.join(' ');
    }
    
    return s.includes(' ') ? reversePhrase() : reverseWord(s);
};

// Time Complexity
//   Best case (except edge): O(n) if no spaces
//   Worst case: O(n^2): One nested iteration with operations between .split() and .join()

// Space Complexity:
//   O(n): Recursive iteration in reverseWord()