function findRotatedIndex(arr, target) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (arr[leftIndex] === target) return leftIndex;
	if (arr[rightIndex] === target) return rightIndex;

	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midVal = arr[midIndex];
		let leftVal = arr[leftIndex];

		if (midVal === target) {
			return midIndex;
		} else if (
			(midVal > target && leftVal > target) ||
			(midVal < target && leftVal < target)
		) {
			leftIndex = midIndex + 1;
		} else {
			rightIndex = midIndex - 1;
		}
	}
	return -1;
}

module.exports = findRotatedIndex;
