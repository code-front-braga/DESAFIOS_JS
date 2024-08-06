const sumOnlyNumericValues = objectArray => {
  let values = Object.values(objectArray); // Converte o objeto em array com apenas os valores de cada propriedade;
  let sumOfTypeOfNumber = values
    .filter(element => typeof element === 'number')
    .reduce((accumulate, currentValue) => accumulate + currentValue, 0);

  return sumOfTypeOfNumber;
};

const obj = { a: 2, b: 20, c: '10', d: 15, e: '20', f: 3 };
console.log(sumOnlyNumericValues(obj));
