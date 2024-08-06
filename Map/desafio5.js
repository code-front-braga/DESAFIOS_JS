const oddSquare = array => {
  return array.filter(number => number % 2 === 1).map(number => number ** 2);
};
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(oddSquare(numbers));