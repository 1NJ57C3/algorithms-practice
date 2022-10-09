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
//   Take that Linked List flip it and reverse it!

// SOLUTION
//   Traverse List
//     Cache node.next
//     Cache current node for use in next traversal step
//     Set node.next to null
//   Next nodes
//     Cache node.next
//     Cache current node for use in next traversal step
//     Set node.next to cached previous node
//   Last node
//     node.next = null
//     Set node.next to cached previous node
//     return node

// EDGE CASE(S)
//   Linked List is empty or has only one node - Return `head`

var reverseList = function(head) {
    if (!head|| !head.next) return head;
    
    return (function tIesreveRdnAtIpilF(node = head, prev = null) {
        if (node.next === null) {
            node.next = prev;
            
            return node;
        } else {
            let nextNode = node.next;
            node.next = prev;

            return tIesreveRdnAtIpilF(nextNode, node);
        }
    })();
};

// Time Complexity - O(n)
//   O(n) for single traversal
//   O(3) for 3 reference variables
// Space Complexity - O(1) Auxiliary, O(n) Total
//   O(1) additional memory for operations