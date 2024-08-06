const countPeople = peopleList => {
  let count = 0;
  let newListPeople = [];
  for (let person of peopleList) {
    if (person.age > 18) {
      count++;
      newListPeople.push(person.name);
    }
  }
  return `${count} Pessoas são maiores de 18 anos. São elas: ${newListPeople}.`;
};
const peopleListA = [
  { name: 'Leonardo', age: 32 },
  { name: 'Iza', age: 36 },
  { name: 'Bernardo', age: 16 },
  { name: 'Joaquim', age: 15 },
  { name: 'Kárcia', age: 12 },
  { name: 'Lucas', age: 19 },
  { name: 'Pedro', age: 19 },
  { name: 'Amanda', age: 21 },
];
console.log(countPeople(peopleListA));

//Outra forma:
const countOtherPeople = otherPeople => {
  return otherPeople.reduce((count, person) => (person.age > 18 ? ++count : count), 0);
};
const peopleListB = [
  { name: 'Leonardo', age: 32 },
  { name: 'Iza', age: 36 },
  { name: 'Bernardo', age: 16 },
  { name: 'Joaquim', age: 26 },
  { name: 'Kárcia', age: 15 },
  { name: 'Lucas', age: 19 },
  { name: 'Pedro', age: 19 },
  { name: 'Amanda', age: 21 },
];
console.log(countOtherPeople(peopleListB));
