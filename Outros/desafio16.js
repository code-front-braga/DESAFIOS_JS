function showProps(objects, objectName) {
  let result = '';

  for (let obj in objects) {
    if (objects.hasOwnProperty(obj)) {
      result += objectName + '.' + obj + ' = ' + objects[obj] + '\n';
    }
  }
  return result;
}

const myCar = {
  model: 'Hatch',
  factory: 'Ford',
  color: 'Blue',
  name: 'Ka',
};

console.log(showProps(myCar, 'myCar'));
