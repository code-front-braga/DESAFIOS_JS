const averageAgeEndsWithA = arrayObject => {
  let endsWithA = arrayObject.filter(person => person.name.endsWith('a'));
  let sumOfAges = endsWithA.reduce((acc, person) => acc + person.age, 0);
  return sumOfAges / endsWithA.length;
};
let person = [
  { name: 'Ana', age: 20 },
  { name: 'Bruno', age: 25 },
  { name: 'Carla', age: 30 },
  { name: 'Alice', age: 35 },
  { name: 'Fernanda', age: 40 },
];

console.log(averageAgeEndsWithA(person));
