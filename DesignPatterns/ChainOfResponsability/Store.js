var Storage = require('./Storage');

class Store {

    constructor(name, inventario=[]){
        this.name = name;

        var floor = new Storage('prateleira', inventario.floor);
        var backroom = new Storage('estoque', inventario.backroom);
        var localStore = new Storage('loja proxima', inventario.localStore);
        var warehouse = new Storage('armazen', inventario.warehouse);

        floor.setNext(backroom);
        backroom.setNext(localStore);
        localStore.setNext(warehouse);

        this.storage = floor;
    }

    find(itemName){
        return this.storage.find(itemName);
    }
}

module.exports = Store;