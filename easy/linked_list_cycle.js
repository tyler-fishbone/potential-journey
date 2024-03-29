/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {    
  slow = head
  fast = head

  while (fast && fast.next) {
      slow = slow.next
      fast = fast.next.next
      if (slow === fast) {
          return true
      }
  }
  return false
};
//time = O(n) - reaching all the nodes
// space = O(1) - as it gets longer you still just use two pointers