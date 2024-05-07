/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
type Stack struct {
    Top *ListNode
    Size int
}

func (stack *Stack) Peek() *ListNode {
    return stack.Top;
}
func (stack *Stack) Push(value int) {
    node := &ListNode{Val: value,Next: stack.Top};
    stack.Top = node;
    stack.Size++;
}
func (stack *Stack) Pop() *ListNode {
    if(stack.Top==nil) {
        return nil;
    }
    node := stack.Top;
    stack.Top = node.Next;
    node.Next=nil;
    stack.Size--;
    return node;
}
func (stack *Stack) ReverseNClean() *ListNode {
    var result *ListNode
    for stack.Peek() != nil {
        node := stack.Pop()
        node.Next = result
        result = node
    }

    return result
}
func compareNPush(stack *Stack,head *ListNode) {
    if(head!=nil) {
        for(stack.Peek() !=nil && stack.Peek().Val<head.Val) {
            stack.Pop();
        }
        stack.Push(head.Val);
        compareNPush(stack,head.Next);
    }
}
func removeNodes(head *ListNode) *ListNode {
    stack := &Stack{};
    compareNPush(stack,head);
    return stack.ReverseNClean();
}
