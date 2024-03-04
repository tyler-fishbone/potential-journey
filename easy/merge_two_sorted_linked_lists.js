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
 // if either no just return other
 // two pointers
 var mergeTwoLists = function(list1, list2) {
  let dummy = new ListNode()
  let tail = dummy

  while (list1 && list2) {
      if (list1.val <= list2.val) {
          tail.next = list1
          list1 = list1.next
      } else {
          tail.next = list2
          list2 = list2.next
      }
      tail = tail.next
  }
  if (!list1) {
      tail.next = list2
  } else {
      tail.next = list1
  }
  return dummy.next
};
// O(m+n) time - 1 element each
// O(1) - space, requires a constant amount of space regardless of input size