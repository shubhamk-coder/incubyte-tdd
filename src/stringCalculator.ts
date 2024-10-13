export function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const delimiterLine = numbers.split("\n")[0];
    delimiter = new RegExp(`[${delimiterLine.slice(2)}]`);
    numbers = numbers.split("\n")[1];
  }

  const numberArray = numbers.split(delimiter).map((num) => parseInt(num));

  const negatives = numberArray.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(",")}`);
  }

  const sum = numberArray.reduce((acc, num) => acc + num, 0);

  return sum;
}
