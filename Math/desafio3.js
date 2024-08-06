const randomNumbers = () => {
  const n = 25;
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }

  newArray.sort(() => Math.random() - 0.5);

  const random15 = newArray.slice(0, 15);

  random15.sort((a, b) => a - b);

  return random15;
};
console.log(randomNumbers());
