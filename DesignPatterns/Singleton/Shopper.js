var logger = require('./Logger');

class Shopper{

    constructor(name, money=0){
        this.name = name;
        this.money = money;
        logger.log(`Novo comprador: ${name} tem ${money} em sua conta`);
    }
}

module.exports = Shopper;