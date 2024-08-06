//forma A:
const sumEvenNumbers = numbers => {
  let sum = 0;
  for (const number of numbers) {
    if (number % 2 === 0) {
      sum += number;
    }
  }
  return sum;
};
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumEvenNumbers(array));

//forma B:
const sumEvenNumbersB = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16];
  let sum = 0;
  for (const number of array) {
    number % 2 === 0 ? (sum += number) : sum;
  }
  return sum;
};
console.log(sumEvenNumbersB());

//forma C:
const sumEvenNumbersC = () => {
  const array = [1, 2, 5, 8, 4, 3, 12, 20, 7];
  return array.reduce((sum, number) => (number % 2 === 0 ? sum + number : sum), 0);
};
console.log(sumEvenNumbersC());

//forma D:
const evenNumbers = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 6, 22];
  let sum = 0;
  for (const number in array) {
    array[number] % 2 === 0 ? (sum += array[number]) : sum;
  }
  return sum;
};
console.log(evenNumbers());
