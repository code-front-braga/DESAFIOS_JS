//forma A #example1:
const getMaxAndMinNumber = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  return { max, min };
};
const numbers = [2, 30, 4, 20];
console.log(getMaxAndMinNumber(numbers));

//forma A #example2:
const getMaxAndMinNumbersB = () => {
  const numbers = [21, 4, 20];
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);
  return { max, min };
};
console.log(getMaxAndMinNumbersB());