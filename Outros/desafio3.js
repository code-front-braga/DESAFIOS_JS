//forma A #example1:
const fatorialA = (numero) => {
  return numero <= 1 ? 1 : numero * fatorialA(numero - 1);
};
console.log(fatorialA(5));

//forma B example1:
//Memoização é uma técnica de otimização de código que consiste em armazenar em cache os resultados de uma função baseado nos parâmetros de entrada. Dessa forma, se a função for chamada novamente com os mesmos parâmetros, o valor do cache é retornado, evitando cálculos desnecessários. Memoização é útil para funções puras, ou seja, funções que sempre retornam o mesmo resultado para os mesmos parâmetros. Um exemplo clássico de memoização é a implementação da função de Fibonacci, que calcula o n-ésimo termo da sequência de Fibonacci.
// Cria um array vazio para armazenar os resultados
const memo = [];
const fatorialB = (n) => {
  if (n <= 1) return 1;
  if (memo[n]) return memo[n];

  memo[n] = n * fatorialB(n - 1);

  return memo[n];
};
console.log(fatorialB(5));

//forma C #example1:
const fatorialC = () => {
  const number = 7;
  let accumulator = 1;
  for (let i = 1; i <= number; i++) {
    accumulator *= i;
  }
  return accumulator;
}
console.log(fatorialC());
