var Shopper = require('./Shopper');

var cliente1 = new Shopper('Jose');
cliente1.addItemToList('A');
cliente1.addItemToList('B');
cliente1.addItemToList('C');
cliente1.addItemToList('D');
cliente1.addItemToList('E');

var cliente2 = new Shopper('Joao');
cliente2.addItemToList('A');
cliente2.addItemToList('B');
cliente2.addItemToList('C');
cliente2.addItemToList('D');
cliente2.addItemToList('F');

console.log(`${cliente1.name}: ${cliente1.shoppingList}`);
console.log(`${cliente2.name}: ${cliente2.shoppingList}`);