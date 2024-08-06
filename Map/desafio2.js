const convertToCapital = () => {
  const minusculeStrings = ['avião', 'casa', 'comida', 'arroz'];
  return minusculeStrings.map((string) => string.toUpperCase());
};
console.log(convertToCapital());
