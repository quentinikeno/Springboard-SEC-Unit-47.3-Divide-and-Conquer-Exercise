function findFloor(arr, x) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (x < arr[leftIndex]) return -1;

	while (leftIndex <= rightIndex) {
		const midIndex = Math.floor((leftIndex + rightIndex) / 2);
		const midVal = arr[midIndex];
		const nextVal = arr[midIndex + 1];
		const prevVal = arr[midIndex - 1];
		const rightVal = arr[rightIndex];

		if (rightVal < x) return rightVal;
		if ((midVal === x || x > nextVal) && prevVal < x) return prevVal;

		if (midVal < x) {
			leftIndex = midIndex + 1;
		} else {
			rightIndex = midIndex - 1;
		}
	}
}

module.exports = findFloor;
