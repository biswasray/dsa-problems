/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func double(head *ListNode) int {
    if(head==nil) {
        return 0;
    }
    acc := double(head.Next);
    num := head.Val * 2 + acc;
    head.Val = num % 10;
    return num / 10;
}
func doubleIt(head *ListNode) *ListNode {
    acc := double(head);
    if(acc>0) {
        temp := &ListNode{Val: acc,Next:head};
        return temp;
    }
    return head;
}
