const getOnlyNumericKeys = () => {
  const obj = {
    name: 'Leonardo',
    lastName: 'Braga',
    age: 32,
    height: 1.66,
    profession: 'Programmer',
  };

  const newObj = [];

  for (let property in obj) {
    if (typeof obj[property] === 'number') {
      newObj.push(property);
    }
  }
  return newObj;
};
console.log(getOnlyNumericKeys());
