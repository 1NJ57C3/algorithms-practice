/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// OBJECTIVE
//   Return the node in the middle of the linked list
//     if head % 2 === 0, return head / 2 + 1
//     if head % 2 !== 0, return head / 2

// SOLUTION
//   Iterate through list
//     Capture count of nodes until null
//   Modulus 2 => if zero divide by two, else divide by two and round down
//   Iterate again step3 times and return

// SOLUTION B
//   Iterate through list
//     hashMap => "index" : node
//     Capture count of nodes until null
//   Modulus 2 => if zero add one, else round down
//   access hashMap using step3 as key

// EDGE CASE
//   Empty list or length of 1

var middleNode = function(head) {
    if (!head.next || !head) return head;
    
    let listLength = 0;
    
    (function countList(node) {
        if (!node) return listLength;
        else {
            listLength++;
            return countList(node.next);
        }
    })(head)
    
    let mid = listLength % 2 === 0 ? listLength / 2 : Math.floor(listLength / 2);
    let node = head;
        
    for (let i = 0; i < mid; i++) {
        node = node.next;
    }
    
    return node;
};

// Time Complexity: O(n)
//   O(1.5n) One and a half linear traversals of List
// Space Complexity: O(1)
//   O(1) 1 helper function
//   O(3) variables