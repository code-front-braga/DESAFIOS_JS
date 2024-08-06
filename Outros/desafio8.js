const invertStrings = () => {
  const alphabet = ['abc', 'def', 'ghi', 'jkl'];
  let newAlphabet = [];
  for (const group of alphabet) {
    const invertedGroup = group.split('').reverse().join('');
    newAlphabet.push(invertedGroup);
  }
  return newAlphabet;
};
console.log(invertStrings());
