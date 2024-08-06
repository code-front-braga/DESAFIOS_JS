function matchHouses(step) {
  if (step < 1 || !Number.isInteger(step)) return 0;
  return 6 + 5 * (step - 1);
}
console.log(matchHouses(4));

// 1 casa = 6 palitos
// 2 casas = 11 palitos
// 3 casas = 16 palitos
// 4 casas = 21 palitos