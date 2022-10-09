/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// OBJECTIVE
//   Splice together nodes of two sorted lists, `list1` and `list2`, in relative order
//   return head of merged list

// SOLUTION
//   If either list is empty, return the other
//   Compare first values of each list
//   Iterate through list with lower starting value, comparing against first value of list B
//     if value of nodeB <= value of nodeA's next value, splice in nodeB
//       cache nodeB's current `.next` value
//       change nodeB's current `.next` value to nodeA's `.next` value
//       change nodeA's current `.next` value to nodeB
//     Continue iteration, comparing against next value of list B
//     if end of list A is reached, splice remainder of list B into list A
//     if end of list B is reached, return list A

var mergeTwoLists = function(list1, list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    
    let mutatedList = list1;
    
    function theSplicer(nodeA, nodeB) {
        if (nodeB === null) return mutatedList;
        if (nodeA.next === null && !!nodeB) {
            nodeA.next = nodeB;
            return mutatedList;
        }
        if (nodeB.val <= nodeA.next.val) {
            let cachedForNext = nodeB.next;
            nodeB.next = nodeA.next;
            nodeA.next = nodeB;
            
            return theSplicer(nodeA.next, cachedForNext);
        }
        return theSplicer(nodeA.next, nodeB);
    }
    
    if (list1.val < list2.val) return theSplicer(list1, list2);
    else {
        mutatedList = list2;
        return theSplicer(list2, list1);
    }
};

// Time Complexity: O(n)
//   One iteration of list1 + list2 lengths (2n)
// Space Complexity: O(n)
//   O(2n) base - lengths of `list1` and `list2`
//   O(4) additional through operations
//     (4 reused reference variables: mutatedList, nodeA, nodeB, cachedForNext)