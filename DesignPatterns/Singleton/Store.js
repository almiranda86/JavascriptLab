var logger = require('./Logger');

class Store{

    constructor(name, inventory = []){
        this.name = name;
        this.inventory = inventory;
        logger.log(`Novo armazenamento: ${name} tem ${inventory.length} items em estoque`);
    }
}

module.exports = Store;