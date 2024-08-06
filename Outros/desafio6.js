// //forma A: #example1:
const personUpdate = (arrayOfPerson, property, value) => {
  const newPerson = { ...arrayOfPerson };
  newPerson[property] = value;
  return newPerson;
};
const myPerson = {
  nome: 'Leo',
  idade: 32,
};
console.log(myPerson);
const personUpdated = personUpdate(myPerson, 'idade', 30);
console.log(personUpdated);
const newUpdate = personUpdate(personUpdated, 'profissao', 'programador');
console.log(newUpdate);

// //forma A: #example2:
const personUpdate2 = (person, property, value) => {
  const newPerson = { ...person };
  newPerson[property] = value;
  return newPerson;
};
const myFamily = [
  { nome: 'Leo', idade: 32, profissao: 'Programador' },
  { nome: 'Iza', idade: 36, profissao: 'Adm' },
];
console.log(personUpdate2(myFamily[1], 'altura', 1.6));
console.log(personUpdate2(myFamily[0], 'altura', 1.66));
