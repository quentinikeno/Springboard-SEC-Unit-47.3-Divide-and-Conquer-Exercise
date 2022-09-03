const findRotatedIndex = require("./find-rotated-index");

it("should find the index of an integer in a rotated array", () => {
	expect(findRotatedIndex([3, 4, 1, 2], 4)).toBe(1);
	expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)).toBe(2);
	expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6);
	expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)).toBe(-1);
	expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)).toBe(-1);
	expect(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)).toBe(6);
	expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 102)).toBe(3);
	expect(findRotatedIndex([37, 44, 66, 102, 10, 22], 44)).toBe(1);
	expect(
		findRotatedIndex([37, 44, 66, 102, 10, 22, 23, 25, 26, 27, 30, 31], 44)
	).toBe(1);
	expect(
		findRotatedIndex([37, 44, 66, 102, 10, 22, 23, 25, 26, 27, 30, 31], 30)
	).toBe(10);
});
