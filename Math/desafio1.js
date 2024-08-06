// //forma A #example1:
// const primeNumber = n => {
//   let prime = [];
//   let currentNumber = 2;

//   for (let i = 0; i < n; i++) {
//     let isPrime = true;

//     for (let j = 2; j < currentNumber; j++) {
//       if (currentNumber % j === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       prime.push(currentNumber);
//     } else {
//       i--;
//     }
//     currentNumber++;
//   }
//   return prime;
// };
// const example = 6;
// console.log(primeNumber(example));

//forma B: #example1:
const isPrime = num => {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
    if (num % i === 0) return false;
    return num > 1;
};

const primeNumberB = n => {
  let primes = [];
  let num = 2;
  
  while (primes.length < n) {
    if (isPrime(num)) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};
console.log(primeNumberB(10));
