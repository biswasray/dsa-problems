import "math"

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func filterIntSlice(slice []*ListNode, fn func(*ListNode) bool) []*ListNode {
	filteredSlice := make([]*ListNode, 0)
	for _, v := range slice {
		if fn(v) {
			filteredSlice = append(filteredSlice, v)
		}
	}
	return filteredSlice
}

func compareNAdd(prev *ListNode, lists []*ListNode) {
	n := len(lists)
	if n == 0 {
		return
	}

	minIndex := -1
	min := math.MaxInt64
	for i := 0; i < n; i++ {
		if lists[i] != nil && lists[i].Val < min {
			minIndex = i
			min = lists[i].Val
		}
	}
	if minIndex == -1 {
		return
	}
	prev.Next = lists[minIndex]
	lists[minIndex] = lists[minIndex].Next
	if lists[minIndex] == nil {
		lists = append(lists[:minIndex], lists[minIndex+1:]...)
	}
	compareNAdd(prev.Next, lists)
}
func mergeKLists(lists []*ListNode) *ListNode {
	root := &ListNode{Val: 0, Next: nil}
	compareNAdd(root, lists)
	return root.Next
}
