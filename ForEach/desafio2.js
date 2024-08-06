const filterLongWord = n => {
  const arrayOfWords = ['carro', 'bicicleta', 'sol', 'energia', 'caminhão', 'violão', 'lazer', 'casa'];
  const newArray = [];

  arrayOfWords.forEach(word => (word.length === n ? newArray.push(word) : word));
  return newArray;
};
const n = 10;
console.log(filterLongWord(n));
