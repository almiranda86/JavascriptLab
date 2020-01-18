class Store {

    constructor(name, inventario=[]){
        this.name = name;
        this.inventario = inventario;
    }

    find(itemName){
        var index = this.inventario.map(item => item.name).indexOf(itemName);
        return this.inventario[index];
    }
}

module.exports = Store;