import "sort"

func maximumHappinessSum(happiness []int, k int) int64 {
	sort.Ints(happiness)
	var res int64 = 0
	n := len(happiness) - 1
	for i := 0; i < k; i++ {
		temp := int64(happiness[n] - i)
		if temp >= 0 {
			res += temp
		}
		n--
	}
	return res
}
