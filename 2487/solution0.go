
import (
    "container/list"
)


func removeNodes(head *ListNode) *ListNode {
    var cur *ListNode = head
    stack := list.New() // Using container/list as a stack

    for cur != nil {
        for stack.Len() > 0 && stack.Back().Value.(*ListNode).Val < cur.Val {
            stack.Remove(stack.Back())
        }
        stack.PushBack(cur)
        cur = cur.Next
    }

    var nxt *ListNode
    for stack.Len() > 0 {
        cur = stack.Remove(stack.Back()).(*ListNode)
        cur.Next = nxt
        nxt = cur
    }

    return cur
}

