// Forma A
function inverterObject() {
  const person = {
    name: 'Leo',
    age: 32,
    job: 'Programador',
  };
  const newObject = {};
  for (let property in person) {
    let value = person[property];
    newObject[value] = property;
  }
  return newObject;
}
console.log(inverterObject());

// Forma B
function inverterObjectB(obj) {
  return Object.entries(obj) //Converte o objeto em um array de pares [chave, valor];
    .reduce((newObj, [key, value]) => {
      newObj[value] = key;
      return newObj;
    }, {}); //Inicia o novo objeto como vazio;
}
const personB = {
  name: 'Adailza',
  age: 36,
  job: 'ADM',
};

console.log(inverterObjectB(personB));
