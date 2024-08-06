const numberCounter = () => {
  const numbers = [1, 1, 2, 3, 4, 4, 5, 7, 2, 3, 3, 5, 5, 6, 1, 1, 3, 2, 2];
  let newObj = {};
  numbers.forEach(number => {
    newObj[number] = newObj[number] ? newObj[number] + 1 : 1;
  })
  return newObj;
};
console.log(numberCounter());
