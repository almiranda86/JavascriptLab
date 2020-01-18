const cliente = require("./scout_prototype");

var cliente1 = cliente.clone();
cliente1.name = 'Jose';
cliente1.addItemToList('E');

var cliente2 = cliente.clone();
cliente2.name = 'Joao';
cliente2.addItemToList('F');

console.log(`${cliente1.name}: ${cliente1.shoppingList}`);
console.log(`${cliente2.name}: ${cliente2.shoppingList}`);