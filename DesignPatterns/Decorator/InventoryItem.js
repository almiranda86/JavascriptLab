class InventoryItem{

    constructor(name, preco){
        this.name = name
        this.preco = preco
    }

    print(){
        console.log(`${item.name} custa ${item.preco}`);
    }

}

class GoldInventoryItem{

    constructor(baseItem){
        this.name = `${baseItem.name} Dourado `
        this.preco =  1000 + baseItem.preco;
    }

    // print(){
    //     console.log(`${item.name} custa ${item.preco}`);
    // }

}

class DiamondInventoryItem{

    constructor(baseItem){
        this.name = `${baseItem.name} de Diamantes `
        this.preco =  1000 + baseItem.preco;
        this.cortaVidro = true;
    }

    print(){
        console.log(`${item.name} custa muito dinheiro`);
    }

}

module.exports = {InventoryItem, GoldInventoryItem, DiamondInventoryItem};