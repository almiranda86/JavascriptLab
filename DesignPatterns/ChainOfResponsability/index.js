var Store = require('./Store');
var Inventory = require('./Inventory');

var loja = new Store('LOJA', Inventory);

var itemProcurado = 'A';

var resultado = loja.find(itemProcurado);

console.log(resultado);