const countZeroes = require("./count-zeroes");

it("returns the correct number of zeroes in an array", () => {
	expect(countZeroes([1, 1, 1, 1, 0, 0])).toBe(2);
	expect(countZeroes([1, 0, 0, 0, 0])).toBe(4);
	expect(countZeroes([0, 0, 0])).toBe(3);
	expect(countZeroes([1, 1, 1, 1])).toBe(0);
});
