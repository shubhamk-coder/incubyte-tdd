"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    var delimiter = /[\n,]/;
    if (numbers.startsWith("//")) {
        var delimiterLine = numbers.split("\n")[0];
        delimiter = new RegExp("[".concat(delimiterLine.slice(2), "]"));
        numbers = numbers.split("\n")[1];
    }
    var numberArray = numbers.split(delimiter).map(function (num) { return parseInt(num); });
    var negatives = numberArray.filter(function (num) { return num < 0; });
    if (negatives.length > 0) {
        throw new Error("negative numbers not allowed: ".concat(negatives.join(",")));
    }
    var sum = numberArray.reduce(function (acc, num) { return acc + num; }, 0);
    return sum;
}
