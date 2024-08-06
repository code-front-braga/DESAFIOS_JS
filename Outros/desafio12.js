const b = {amor: 1, aviao: 2, carro: 3, casa: 4};
const news = [];
for (let property in b) {
  if (property.startsWith('a')) {
    news.push(property);
  }
}
console.log(news);