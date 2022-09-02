function sortedFrequency(arr, target) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (arr[leftIndex] > target || arr[rightIndex] < target) return -1;

	const firstIndex = findFirstIndex(arr, target, leftIndex, rightIndex);
	const lastIndex = findLastIndex(arr, target, leftIndex, rightIndex);
	return lastIndex - firstIndex + 1;
}

function findFirstIndex(arr, target, leftIndex, rightIndex) {
	if (arr[leftIndex] === target) return leftIndex;

	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midVal = arr[midIndex];

		if (midVal === target && arr[midIndex - 1] < target) {
			return midIndex;
		} else if (midVal < target) {
			leftIndex = midIndex + 1;
		} else {
			rightIndex = midIndex - 1;
		}
	}
}

function findLastIndex(arr, target, leftIndex, rightIndex) {
	if (arr[rightIndex] === target) return rightIndex;

	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midVal = arr[midIndex];

		if (midVal === target && arr[midIndex + 1] > target) {
			return midIndex;
		} else if (midVal > target) {
			rightIndex = midIndex - 1;
		} else {
			leftIndex = midIndex + 1;
		}
	}
}

module.exports = sortedFrequency;
