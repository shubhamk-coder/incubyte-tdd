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

  const numberArray = numbers.split(delimiter);
  const sum = numberArray.reduce((acc, num) => acc + parseInt(num), 0);

  return sum;
}
