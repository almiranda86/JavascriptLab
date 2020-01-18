var Shopper = require('./Shopper');
var Employee = require('./Employee');

var cliente = new Shopper('Jose', 100);
var empregado = new Employee('Joao', 100, 'Faz coisas');

console.log(cliente.toString());
console.log(empregado.toString());