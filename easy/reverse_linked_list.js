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
var reverseList = function(head) {
  let newListMostRecentlyAdded = null // end of reversed list
  let current = head

  while (current) {
      let nextNode = current.next
      current.next = newListMostRecentlyAdded
      newListMostRecentlyAdded = current
      current = nextNode
  }

  return newListMostRecentlyAdded
  
};