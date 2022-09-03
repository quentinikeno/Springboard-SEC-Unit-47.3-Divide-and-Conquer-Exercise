function findRotatedIndex(arr, target) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (arr[leftIndex] === target) return leftIndex;
	if (arr[rightIndex] === target) return rightIndex;

	const minIndex = findMinIndex(arr, leftIndex, rightIndex);
	const maxIndex = minIndex - 1;

	return arr[leftIndex] < target && target <= arr[maxIndex]
		? findIndex(arr, target, leftIndex, maxIndex)
		: findIndex(arr, target, minIndex, rightIndex);
}

function findIndex(arr, target, leftIndex, rightIndex) {
	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midVal = arr[midIndex];

		if (arr[leftIndex] === target) return leftIndex;
		if (arr[rightIndex] === target) return rightIndex;

		if (midVal === target) {
			return midIndex;
		} else if (midVal < target) {
			leftIndex = midIndex + 1;
		} else {
			rightIndex = midIndex - 1;
		}
	}
	return -1;
}

function findMinIndex(arr, leftIndex, rightIndex) {
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
}

module.exports = findRotatedIndex;
