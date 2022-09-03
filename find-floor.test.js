const findFloor = require("./find-floor");

it("should find the floor for a sorted array", () => {
	expect(findFloor([1, 2, 8, 10, 10, 12, 19], 9)).toBe(8);
	expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19);
	expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1);
});
