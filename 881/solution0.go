import "sort"

func numRescueBoats(people []int, limit int) int {
	sort.Ints(people)
	var n = len(people)
	var (
		a, b, res = 0, n - 1, 0
	)
	for a <= b {
		if a == b {
			res++
			return res
		}
		if people[a]+people[b] <= limit {
			res++
			a++
			b--
		} else if people[b] <= limit {
			res++
			b--
		} else {
			return -1
		}
	}
	return res
}
