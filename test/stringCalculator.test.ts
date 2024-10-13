import { add } from "../src/stringCalculator";

describe("String Calculator", () => {
  it("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  it("should return the number when only one number is present", () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
  });

  it("should return the sum of two numbers separated by a comma", () => {
    expect(add("1,2")).toBe(3);
    expect(add("3,5")).toBe(8);
  });
});
