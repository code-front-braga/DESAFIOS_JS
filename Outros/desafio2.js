//forma B #example1:
const getMaxAndMinNumbersC = () => {
  const numbers = [10, 12, 16, 22, 40, 5];
  let max = numbers[0];
  let min = numbers[0];

  for (const pos in numbers) {
    if (numbers[pos] > max) {
      max = numbers[pos];
    }
    if (numbers[pos] < min) {
      min = numbers[pos];
    }
  }
  return { max, min };
}
console.log(getMaxAndMinNumbersC());

//OBSERVAÇÕES FINAIS:
//A melhor forma para obter o valor máximo e o mínimo é utilizando o spread;
