//forma A #example1:
const person = {
  name: 'Leonardo',
  middleName: 'Primo',
  age: 32,
};

const greetings = () => {
  const text = `Olá, ${person.name} ${person.middleName}. Você tem ${person.age} anos.`;
  return text;
};
console.log(greetings(person));

//forma A #example2:
const car = {
  modelo: 'Corolla',
  marca: 'Toyota',
  ano: 2023
};
const carDetails = () => {
  return `Eu tenho um ${car.modelo}, da marca ${car.marca}. Ele é do ano de ${car.ano}`;
}
console.log(carDetails());

//forma A #example3:
const myFamily = {
  eu: 'Leonardo',
  esposa: 'Adailza',
  filha: 'Liz',
  mae: 'Kárcia',
  pai: 'Leonardo',
  irmaos: 'Vinicius, Bernardo e Joaquim'
};
const showMyFamily = () => {
  return `Essa é a minha família: eu me chamo ${myFamily.eu}. Minha esposa se chama ${myFamily.esposa} e temos uma filha chamada ${myFamily.filha}. Minha mãe se chama ${myFamily.mae} e meu pai, ${myFamily.pai}. Eu tenho 3 irmãos, são eles: ${myFamily.irmaos}.`
}
console.log(showMyFamily());


//forma B #example1:
const newGreetings = (person) => {
  let { name, age } = person;
  return `Olá, ${name}. Sua idade é ${age} anos.`;
};
let example = { name: 'Leonardo', age: 32 };
console.log(newGreetings(example));

//forma B #example2:
const carDetailsB = () => {
  const cars = {
    model: 'T-Cross',
    manufacturer: 'Volkswagen',
    year: 2023
  };
  let { model, manufacturer, year } = cars;
  return {model, manufacturer, year}; 
}
console.log(carDetailsB());
