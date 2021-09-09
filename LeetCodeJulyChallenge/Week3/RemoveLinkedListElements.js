/*Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if (head === null) return head;
	let dummy = new ListNode(0);
	dummy.next = head;
	let cur = dummy;
	while (cur.next != null) {
		if (cur.next.val === val) {
			cur.next = cur.next.next;
		} else {
			cur = cur.next;
		}
	}
	return dummy.next;
};