class Shopper {

    constructor(name) {
        this.name = name;
    }

    notify(storeName, discount){
        console.log(`${this.name}, ha uma promocao em ${storeName}! Desconto de ${discount}% em tudo!`);
    }
}

module.exports = Shopper;
