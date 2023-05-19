/*
Remove Duplicates from Linked List

You're given the head of a Singly Linked List whose nodes are in sorted order with respect to their values. Write a function that returns a modified version of the Linked List that doesn't contain any nodes with duplicate values. The Linked List should be modified in place (i.e., you shouldn't create a brand new list), and the modified Linked List should still have its nodes sorted with respect to their values.

Each `LinkedList` node has an integer value as well as a `next` node pointing to the next node in the list or to `None` / `null` if it's the tail of the list.

Sample Input
linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6 

Sample Output
1 -> 3 -> 4 -> 5 -> 6

*/

// SOLUTION
//   Compare node of linkedList to next node
//     If node.value is the same as node.next.value
//       Change node.next to node.next.next
//   Repeat
//   ???
//   Profit
//   Return linkedList

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let node = linkedList;

  while (node.next !== null) {
    if (node.value === node.next.value) {
      node.next = node.next.next
    } else {
      node = node.next;
    }
  }

  return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

let input1 = new LinkedList(1);
let input2 = new LinkedList(1);
input1.next = input2;
let input3 = new LinkedList(3);
input2.next = input3;
let input4 = new LinkedList(4);
input3.next = input4;
let input5 = new LinkedList(4);
input4.next = input5;
let input6 = new LinkedList(4);
input5.next = input6;
let input7 = new LinkedList(5);
input6.next = input7;
let input8 = new LinkedList(6);
input7.next = input8;
let input9 = new LinkedList(6);
input8.next = input9;

console.log(removeDuplicatesFromLinkedList(input1))