const alphabeticOrder = () => {
  const object = { b: 1, e: 3, a: 0, d: 2, c: 4 };
  const setNewObject = {};

  let keys = Object.keys(object);

  for (let key of keys) {
    setNewObject[key] = object[key];
  }
  return setNewObject;
};
console.log(alphabeticOrder());
