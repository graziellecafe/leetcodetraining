const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
];

const itemNames = (item) => {
  return item.name;
};

console.log(itemNames);

// Nova maneira de imprimir o novo array gerado pelo método map
// 1. Esta é a sua função que sabe o que extrair de CADA item individual
const getItemName = (item) => {
  return item.name;
};

// 2. Aqui você chama o .map() no array 'items' e passa a sua função para ele
const itemNamesArray = items.map(getItemName);

// 3. Agora sim, imprimimos o novo array gerado
console.log(itemNamesArray);
