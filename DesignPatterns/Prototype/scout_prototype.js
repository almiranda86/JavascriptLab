var Shopper = require('./Shopper');

var cliente = new Shopper();
cliente.addItemToList('A');
cliente.addItemToList('B');
cliente.addItemToList('C');
cliente.addItemToList('D');

module.exports = cliente;