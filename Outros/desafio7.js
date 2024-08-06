//dividir números pares e ímpares em dois subarrays dentro um array;
//forma A:
const getTwoSubArraysOfNumbersEvenAndOdd = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //esperado [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]];
  const setSubArray = [];
  const evenArray = [];
  const oddArray = [];
  for (let number of array) {
    if (number % 2 === 0) {
      evenArray.push(number);
    } else {
      oddArray.push(number);
    }
  }
  setSubArray.push(oddArray, evenArray);
  return setSubArray;
};
console.log(getTwoSubArraysOfNumbersEvenAndOdd());
