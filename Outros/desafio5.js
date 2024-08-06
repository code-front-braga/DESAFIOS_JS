//sequência de Fibonacci:
const getFibonacci = n => {
  let fibonacci = [];

  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) {
      fibonacci.push(i);
    } else {
      fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }
  }
  return fibonacci;
};
let example = 6;
console.log(getFibonacci(example));
