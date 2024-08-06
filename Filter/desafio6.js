const convertToObject = array => {
  let objectArray = {};
  array.forEach(item => {
    objectArray[item] = array.filter(element => element === item).length;
  });
  return objectArray;
};
let fruits = ['apple', 'banana', 'apple', 'banana', 'orange', 'apple', 'orange', 'banana'];

console.log(convertToObject(fruits));
