//remover vogais:
const removeVowels = (words) => {
  return words.replace(/[aeiouáéíóúàèìòùãõâêîôû]/gi, '');
};
console.log(removeVowels('Olá, Mundo!'));

//O gi nesse código são modificadores da expressão regular que alteram o modo como a busca é realizada. O g significa global, ou seja, busca todas as ocorrências da expressão na string, não apenas a primeira. O i significa insensitive, ou seja, ignora a diferença entre maiúsculas e minúsculas dos caracteres. No seu exemplo, a expressão regular /[aeiouáéíóúàèìòùãõâêîôû]/gi busca por qualquer vogal, acentuada ou não, em qualquer posição e caso na string words, e as substitui por uma string vazia, ou seja, as remove.