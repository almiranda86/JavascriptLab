const userFactory = require("./userFactory");

var cliente = userFactory('Jose', 100);
var empregado = userFactory('Joao', 100, 'empregado', 'Faz coisas');

console.log(cliente.toString());
console.log(empregado.toString());