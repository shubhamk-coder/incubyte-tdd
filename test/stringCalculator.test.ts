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

  it("should return the sum of multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("4,5,6,7")).toBe(22);
  });

  it("should handle new lines between numbers", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2\n3")).toBe(6);
  });

  it("should support custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//|\n2|3|8")).toBe(13);
  });

  it("should throw an exception when a negative number is passed", () => {
    expect(() => add("1,-2,3")).toThrow(/negative numbers not allowed: -2/);
    expect(() => add("2,-3,-5")).toThrow(/negative numbers not allowed: -3,-5/);
  });
});
