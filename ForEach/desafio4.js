const calculateLengthOfFruits = () => {
  const fruits = ['maçã', 'uva', 'laranja'];
  const newObj = {};

  fruits.forEach(fruit => {
    newObj[fruit] = fruit.length;
  });
  return newObj;
};

console.log(calculateLengthOfFruits());
