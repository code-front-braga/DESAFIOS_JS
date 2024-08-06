//FORMA A example1:
const getMaxNumberFromArgument = (array, n) => {
  const newArray = [];
  for (const number of array) {
    if (number >= n) {
      newArray.push(number);
    }
  }
  return newArray;
};
const array = [2, 20, 22, 30, 35, 40, 50, 10];
const n = 10;
console.log(getMaxNumberFromArgument(array, n));

//...refatorando
//FORMA B example1:
const getMaxNumberFromArgumentB = (array, n) => {
  return array.filter(element => element >= n);
};
const arrayB = [1, 3, 20, 23, 40, 55, 60, 12, 35];
const nB = 42;
console.log(getMaxNumberFromArgumentB(arrayB, nB));
