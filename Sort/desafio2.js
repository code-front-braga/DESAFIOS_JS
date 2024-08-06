// //forma A:
// const getOldestPerson = () => {
//   const leoFamilyAge = [
//     { name: 'Leo', age: 32 },
//     { name: 'Adailza', age: 36 },
//     { name: 'Vinicius', age: 26 },
//     { name: 'Joaquim', age: 15 },
//     { name: 'Bernardo', age: 38 },
//   ];
//   return leoFamilyAge.reduce((person, oldest) => {
//     if (person.age > oldest.age) {
//       return person;
//     } else {
//       return oldest;
//     }
//   }).name;
// };
// console.log(getOldestPerson());

const orderedByAge = () => {
  const izaFamily = [
    { name: 'Adailza', age: 36 },
    { name: 'Josefa', age: 50 },
    { name: 'João', age: 58 },
    { name: 'Titi', age: 35 },
    { name: 'João Marcos', age: 11 },
  ];
  return izaFamily.sort((a, b) => a.age - b.age, 0);
};
console.log(orderedByAge());
