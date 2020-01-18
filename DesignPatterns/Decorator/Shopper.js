class Shopper{

    constructor(name, dinheiro){
        this.name = name;
        this.dinheiro = dinheiro;
        this.items = [];
    }

    purchase(item){
        if(item.preco > this.dinheiro) {
            console.log(`Nao eh possivel comprar ${item.name}`);
        }else{
            console.log(`Comprando item ${item.name}`);
            this.dinheiro -= item.preco;
            this.items.push(item);
        }        
    }

    printStatus(){
        console.log(`${this.name} comprou ${this.items.length} itens:`);
        this.items.forEach(item => {
            console.log(`#${item.name} - ${item.preco}`);
        })

        console.log(`${this.name} tem $${this.dinheiro.toFixed(2)} sobrando`);
    }
}

module.exports = Shopper;