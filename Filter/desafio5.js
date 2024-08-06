const ageFilter = objectsArray => {
  return objectsArray.filter(obj => obj.age > 20).sort((a, b) => a.age - b.age, 0);
};
const people = [
  { name: 'Leo', age: 32 },
  { name: 'Iza', age: 36 },
  { name: 'Liz', age: 4 },
  { name: 'Kim', age: 15 },
  { name: 'Mateus', age: 28 },
];

console.log(ageFilter(people));
