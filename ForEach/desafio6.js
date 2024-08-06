// FORMA A:
const orderedByLessPrice = (objArray, n) => {
  const newArray = [];

  objArray.forEach(obj => (obj.price < n ? newArray.push(obj) : false));
  return newArray;
};
const products = [
  { productName: 'Pencil', price: 1 },
  { productName: 'Book', price: 20 },
  { productName: 'iPhone', price: 2000 },
  { productName: 'tvLg', price: 1200 },
];

const priceReference = 1600;
console.log(orderedByLessPrice(products, priceReference));

// FORMA B:
const orderedByLessPriceB = (objArray, n) => {
  const newArray = [];

  let filter = objArray.filter(obj => obj.price)
  newArray.push(filter);

  // for (let product in objArray) {
  //   if (objArray[product].price < n) {
  //     newArray.push(objArray[product]);
  //   }
  // }
  return newArray;
};
const productsB = [
  { productName: 'Pencil', price: 200 },
  { productName: 'Book', price: 20 },
  { productName: 'iPhone', price: 1000 },
  { productName: 'tvLg', price: 5200 },
];

const priceReferenceB = 5000;
console.log(orderedByLessPrice(productsB, priceReferenceB));
