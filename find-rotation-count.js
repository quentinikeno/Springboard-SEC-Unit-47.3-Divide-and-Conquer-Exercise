function findRotationCount(arr, leftIndex = 0, rightIndex = arr.length - 1) {
	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midVal = arr[midIndex];

		if (midVal < arr[midIndex - 1]) {
			return midIndex;
		} else if (midVal > arr[rightIndex]) {
			leftIndex = midIndex + 1;
		} else {
			rightIndex = midIndex - 1;
		}
	}
	return 0;
}

module.exports = findRotationCount;
