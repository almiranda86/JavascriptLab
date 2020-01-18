var Person = require('./Person');

class PersonBuilder{

    constructor(name){
        this.name = name;
    }

    makeEmployee(){
        this.ehEmpregado = true;
        return this;
    }

    makeManager(hours=40){
        this.ehGerente = true;
        this.horas = hours;
        return this;
    }

    makePartTime(hours=20){
        this.horas = hours;
        return this;
    }

    withMoney(money){
        this.dinheiro = money;
        return this;
    }

    withList(list=[]){
        this.listaCompras = list;
        return this;
    }

    build(){
        return new Person(this);
    }
}

module.exports = PersonBuilder;
