class Person{
    
    constructor(builder){
        this.name = builder.name;
        this.ehEmpregado = builder.ehEmpregado;
        this.ehGerente = builder.ehGerente;
        this.horas = builder.horas || 0;
        this.dinheiro = builder.dinheiro || 0;
        this.listaCompras = builder.listaCompras || [];
    }
    
    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Person;