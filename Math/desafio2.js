//calcular a area e o perímetro de um círculo:
const calcAreaAndPerimeterOfACircle = radius => {
  const perimeter = (2 * Math.PI * radius).toFixed(2);
  const area = (Math.PI * Math.pow(radius, 2)).toFixed(2);
  return { perimeter, area };
};
const radiusA = 5;
console.log(calcAreaAndPerimeterOfACircle(radiusA));

//forma B:

let radiusB = 8
let calcPerimeter = (radius) => {
  return (2 * Math.PI * radius).toFixed(2);
};

let calcArea = (radius) => {
  return (Math.PI * radius ** 2).toFixed(2);
};
const calcAreaAndPerimeterOfACircleB = (radius) => {
  return { perimeter: calcPerimeter(radius), area: calcArea(radius) };
};
console.log(calcAreaAndPerimeterOfACircleB(radiusB));



