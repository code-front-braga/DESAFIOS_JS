const crescentOrder = () => {
  const numbers = [20, 6, 8];
  const newArray = [];
  let max = numbers[0];
  let min = numbers[0];

  for (let pos in numbers) {
    if (numbers[pos] > max) {
      max = numbers[pos];
    }
    if (numbers[pos] < min) {
      min = numbers[pos];
    }
  }
  let sum = numbers.reduce((accumulate, currentValue) => accumulate + currentValue, 0);
  let mid = sum - max - min;
  
  newArray.push(min, mid, max);

  return newArray;
};

console.log(crescentOrder());
