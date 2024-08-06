// Forma A:
const filterProperties = (array, letter) => {
  const newArray = [];
  array.map(obj => {
    if (letter === 'a') {
      newArray.push({ a: obj.a });
    } else if (letter === 'b') {
      newArray.push({ b: obj.b });
    }
  });
  return newArray;
};

const array = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
  { a: 5, b: 6 },
];
console.log(filterProperties(array, 'a'));

// Forma B:
const filterPropertiesB = (array, properties) => {
  return array.map(obj => {
    let newObj = {};
    for (let property of properties) {
      if (obj.hasOwnProperty(property)) {
        newObj[property] = obj[property];
      }
    }
    return newObj;
  });
};

const arrayB = [
  { a: 2, b: 3 },
  { a: 4, b: 6 },
  { a: 6, b: 9 },
];

let properties = ['b'];
console.log(filterPropertiesB(arrayB, properties));