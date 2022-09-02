function countZeroes(arr) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	if (arr[leftIndex] === 0) return arr.length;
	if (arr[rightIndex] === 1) return 0;

	while (leftIndex <= rightIndex) {
		let midIndex = Math.floor((leftIndex + rightIndex) / 2);
		let midVal = arr[midIndex];
		if (midVal === 0 && arr[midIndex - 1] === 1) {
			return arr.length - midIndex;
		} else if (midVal === 1) {
			leftIndex = midIndex + 1;
		} else {
			rightIndex = midIndex - 1;
		}
	}
}

module.exports = countZeroes;
