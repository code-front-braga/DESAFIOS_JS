// const calculateAverage = () => {
//   const students = [
//     { nome: 'Leonardo', notas: [10, 5, 15, 8] },
//     { nome: 'Iza', notas: [2, 10, 20, 15] },
//     { nome: 'liz', notas: [10, 20, 15, 30] },
//     { nome: 'Kim', notas: [10, 12, 20, 25] },
//   ];
//   let medias = [];

//   for (let i = 0; i < students.length; i++) {
//     let soma = students[i].notas.reduce((a, b) => a + b, 0);
//     let media = soma / students[i].notas.length;

//     medias.push({ nome: students[i].nome, media: media.toFixed(2) });
//   }
//   return medias;
// };
// console.log(calculateAverage());

const calculateNewAverage = () => {
  const myFamily = [
    { nome: 'Leo', notas: [10, 20, 30] },
    { nome: 'Vi', notas: [10, 25, 42] },
    { nome: 'Berna', notas: [20, 20, 22] },
    { nome: 'Kim', notas: [20, 20, 12] },
    { nome: 'Kárcia', notas: [10, 10, 10] },
    { nome: 'Leonardo', notas: [5, 12, 30] },
    { nome: 'Iza', notas: [30, 30, 25] },
    { nome: 'Liz', notas: [20, 20, 50] }
  ];
  let objectMedias = [];

  for (let i = 0; i < myFamily.length; i++) {
    let soma = myFamily[i].notas.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    let media = soma / myFamily[i].notas.length;

    objectMedias.push({ nome: myFamily[i].nome, media: media.toFixed(2) });
  }
  return objectMedias;
}
console.log(calculateNewAverage());