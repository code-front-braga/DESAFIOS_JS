const convertToObject = array => {
  let objectArray = {};
  array.forEach(obj => {
    if (objectArray.hasOwnProperty(obj)) {
      objectArray[obj] += 1;
    } else {
      objectArray[obj] = 1;
    }
  });
  return objectArray;
};
let fruits = ['apple', 'banana', 'apple', 'banana', 'orange', 'apple', 'orange', 'banana'];

console.log(convertToObject(fruits));
