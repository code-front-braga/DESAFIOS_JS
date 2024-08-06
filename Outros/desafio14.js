const keysAndValuesByType = () => {
  const object = { a: 1, b: 'Carro', c: 2, d: 'Casa', e: false, f: true };
  const newObj = {};

  for (let key in object) {
    let type = typeof object[key];

    if (newObj[type]) {
      newObj[type][key] = object[key];
    } else {
      newObj[type] = {[key]: object[key]};
    }
  }
  return newObj;

};
console.log(keysAndValuesByType())
