var Person = require('./Person');

//empregados
var empregado1 = new Person('Jose', true, true, 20);
var empregado2 = new Person('Joao', true, false, 50);
var empregado3 = new Person('Pedro', true, false);

//compradores
var comprador1 = new Person('Maria', false, false, 0, 500, ['jeans','camiseta']);
var comprador2 = new Person('Joaquina', false, false, 0, 1000);
