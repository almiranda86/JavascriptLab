var PersonBuilder = require('./PersonBuilder');

//empregados
var empregado1 = new PersonBuilder('Jose')
                    .makeEmployee()
                    .makeManager(20)
                    .build();

var empregado2 = new PersonBuilder('Joao')
                    .makeEmployee()
                    .makePartTime()
                    .build();

var empregado3 = new PersonBuilder('Pedro')
                    .makeEmployee()
                    .build();

//compradores
var comprador1 = new PersonBuilder('Maria')
                    .withMoney(500)
                    .withList(['jeans','camiseta'])
                    .build();

var comprador2 = new PersonBuilder('Joaquina')
                    .withMoney(1000)
                    .build();


console.log(empregado1.toString());
console.log(comprador1.toString());