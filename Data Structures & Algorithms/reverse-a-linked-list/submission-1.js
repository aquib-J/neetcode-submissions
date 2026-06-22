/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
  
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    // brute force -> using array and reversal
    reverseList(head) {
        let valueArray=[];
        while(head){
            valueArray.push(head.val);
            head=head.next;
        }
        valueArray.reverse();
        if(!valueArray.length) return head;
        let newHead=new ListNode(valueArray[0]);
        let nodePtr=newHead;

        let ptr=1;
        while(ptr<valueArray.length){
            nodePtr.next=new ListNode(valueArray[ptr]);
            nodePtr=nodePtr.next;
            ptr+=1;
        }
        return newHead;
    }
}
