func findMedianSortedArrays(num1 []int, num2 []int) float64 {
	m := len(num1)
	n := len(num2)
	i, j, k := 0, 0, 0
	var merge []int = make([]int, m+n)
	for i < m && j < n {
		if num1[i] < num2[j] {
			merge[k] = num1[i]
			k++
			i++
		} else {
			merge[k] = num2[j]
			k++
			j++
		}
	}
	for i < m {
		merge[k] = num1[i]
		k++
		i++
	}
	for j < n {
		merge[k] = num2[j]
		k++
		j++
	}
	if k%2 == 0 {
		x := (k) / 2
		return float64(merge[x]+merge[x-1]) / 2
	}
	return float64(merge[k/2])
}
