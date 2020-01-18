class Person{
    
    constructor(name, ehEmpregado=false, ehGerente=falso, horas=40, dinheiro=0, listaCompras=[]){
        this.name = name;
        this.ehEmpregado = ehEmpregado;
        this.ehGerente = ehGerente;
        this.horas = horas;
        this.dinheiro = dinheiro;
        this.listaCompras = listaCompras;
    }
    
    toString(){
        return JSON.stringify(this);
    }
}

module.exports = Person;