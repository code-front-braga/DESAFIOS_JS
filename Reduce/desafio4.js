//forma A #example1:
const calcMedia = () => {
  let array = [1, 2, 3, 4, 5, 6];
  let lengthOfArray = array.length;
  let sum = 0;
  for (let i = 0; i < lengthOfArray; i++) {
    sum += array[i];
  }
  return sum / lengthOfArray;
};
console.log(calcMedia());

//forma B #example1:
const otherCalcMedia = () => {
  const array = [2, 4, 6, 8, 10, 12];
  let sum = 0;
  for (let number of array) {
    //of já capta o valor em si;
    sum += number;
  }
  return sum / array.length;
};
console.log(otherCalcMedia());

//forma C #example1:
const newCalcAverage = () => {
  const array = [1, 4, 5, 8, 9, 12, 22];
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / array.length;
};
console.log(newCalcAverage().toFixed(2));
