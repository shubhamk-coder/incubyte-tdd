"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringCalculator_1 = require("../src/stringCalculator");
describe("String Calculator", function () {
    it("should return 0 for an empty string", function () {
        expect((0, stringCalculator_1.add)("")).toBe(0);
    });
    it("should return the number when only one number is present", function () {
        expect((0, stringCalculator_1.add)("1")).toBe(1);
        expect((0, stringCalculator_1.add)("5")).toBe(5);
    });
    it("should return the sum of two numbers separated by a comma", function () {
        expect((0, stringCalculator_1.add)("1,2")).toBe(3);
        expect((0, stringCalculator_1.add)("3,5")).toBe(8);
    });
    it("should return the sum of multiple numbers", function () {
        expect((0, stringCalculator_1.add)("1,2,3")).toBe(6);
        expect((0, stringCalculator_1.add)("4,5,6,7")).toBe(22);
    });
    it("should handle new lines between numbers", function () {
        expect((0, stringCalculator_1.add)("1\n2,3")).toBe(6);
        expect((0, stringCalculator_1.add)("1\n2\n3")).toBe(6);
    });
    it("should support custom delimiters", function () {
        expect((0, stringCalculator_1.add)("//;\n1;2")).toBe(3);
        expect((0, stringCalculator_1.add)("//|\n2|3|8")).toBe(13);
    });
    it("should throw an exception when a negative number is passed", function () {
        expect(function () { return (0, stringCalculator_1.add)("1,-2,3"); }).toThrow(/negative numbers not allowed: -2/);
        expect(function () { return (0, stringCalculator_1.add)("2,-3,-5"); }).toThrow(/negative numbers not allowed: -3,-5/);
    });
});
