// //forma A #example1:
const sumArray = () => {
  const arrayNumbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (const number of arrayNumbers) {
    sum += number;
  }
  return sum;
};
console.log(sumArray());

// //forma A #example2:
const multiplicationArray = () => {
  const arrayNumbers = [2, 3, 6, 9];
  let times = 1;
  for (const number of arrayNumbers) {
    times *= number;
  }
  return times;
};
console.log(multiplicationArray());

//forma B #example1:
const subtractionArray = () => {
  const arrayNumbers = [1, 2, -3, 4, -5];
  return arrayNumbers.reduce((accumulator, currentValue) => accumulator - currentValue); 
  //quando utiliza o método reduce() para somar um array por exemplo, o 'a' é o acumulador que se inicializa com 0 e o b é cada número do array;
  //na subtração de um array, não deve-se colocar o inicializador do acumulador;
};
console.log(subtractionArray());

//forma B #example2:
const sumNumbersOfArray = array => {
  return array.reduce((a, b) => a + b, 0);
};
const array = [1, 2, 4, 6, 8, 22];
console.log(sumNumbersOfArray(array));

//forma B #example3:
const multiplicationNumberOfArray = () => {
  const array = [1, 2, 3, 6, 9, 12];
  return array.reduce((a, b) => a * b, 1); //na multiplicação de um array, o inicializador do acumulador deve-se começar com 1;
}
console.log(multiplicationNumberOfArray());

const divideNumberOfArray = () => {
  const array = [4, 1, 3, 6, 8];
  return array.reduce((accumulator, currentValue) => (accumulator / currentValue).toFixed(2));
}
console.log(divideNumberOfArray());
//na divisão de um array, não deve-se colocar o inicializador do acumulador;

//OBSERVAÇÕES FINAIS:
//O melhor método para cálcular os números de um array é o reduce(), que tem a seguinte sintaxe:
// const example = array.reduce((a, b) => a + b) ; ou a - b, a / b, ou a * b;

