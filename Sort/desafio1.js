//forma A: #example1:
const orderFruits = (fruits) => {
  return fruits.sort();
};
let arrayFruits = ['banana', 'apple', 'cocoa', 'damascus'];
console.log(orderFruits(arrayFruits));

//forma B: #example1:
const newOrderFruits = (strings) => {
  let newArrayFruits = [];

  for (const string of strings) {
    newArrayFruits.push(string);
  }
  return newArrayFruits.sort();
};
let newFruits = ['melon', 'sleeve', 'cashew', 'acerola'];
console.log(newOrderFruits(newFruits));
