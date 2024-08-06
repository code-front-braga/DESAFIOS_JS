// //forma A: #example1:
const convertNumbers = numbers => {
  return numbers.map(number => (number % 2 === 0 ? number * 2 : number * 3));
};
let array = [1, 2, 3, 4, 5];
console.log(convertNumbers(array));

//forma B:
let arrayB = [6, 7, 8, 9, 10, 11, 12];
const convertNumbersB = arrayB.map(number => {
  if (number % 2 === 0) {
    return number * 2;
  } else {
    return number * 3;
  }
});
console.log(convertNumbersB);

// //forma C:
const convertNumbersC = () => {
  const arrayC = [5, 1, 4, 12, 3, 6, 7];
  const newArrayC = [];

  for (let number of arrayC) {
    if (number % 2 === 0) {
      newArrayC.push(number * 2);
    } else {
      newArrayC.push(number * 3);
    }
  }
  return newArrayC;
};
console.log(convertNumbersC());
