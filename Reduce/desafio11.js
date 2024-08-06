const sumAgeStartsWithA = objectArray => {
  return objectArray.filter(obj => obj.name.startsWith('A')).reduce((acc, person) => acc + person.age, 0);
};
let people = [
  { name: 'Ana', age: 20 },
  { name: 'Bruno', age: 25 },
  { name: 'Carlos', age: 30 },
  { name: 'Alice', age: 35 },
];

console.log(sumAgeStartsWithA(people));