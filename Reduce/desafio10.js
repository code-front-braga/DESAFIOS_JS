const sumArray = array => {
  return array.reduce((acc, currentValue) => acc + currentValue, 0);
};
const array = [1, 2, 3, 4, 5, 6];
console.log(sumArray(array));
