var Shopper = require('./Shopper');
var Employee = require('./Employee');

var userFactory = (nome, dinheiro = 0, type, employer) => {
    if (type === "empregado") {
        return new Employee(nome, dinheiro, employer);
    } else {
        return new Shopper(nome, dinheiro);
    }
}

module.exports = userFactory;