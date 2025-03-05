
// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// iterative method
function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let curr: ListNode | null = head;

    while (curr !== null) {
        let next: ListNode | null = curr.next
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

// recursive method
function reverseListRecursive(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;  // Base case

    let newHead = reverseListRecursive(head.next); // Recursively reverse
    head.next.next = head; // Reverse the link
    head.next = null; // Break the old link

    return newHead; // Return new head
};