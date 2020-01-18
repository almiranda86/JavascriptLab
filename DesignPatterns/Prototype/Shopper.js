class Shopper{

    constructor(name='pessoa sem nome'){
        this._name = name;
        this._shoppingList = [];
    }

    set name(value){
        this._name = value;
    }

    get name(){
        return this._name;
    }

    get shoppingList(){
        return this._shoppingList.join(', ');
    }

    addItemToList(item){
        this._shoppingList.push(item);
    }

    clone(){
        var proto = Object.getPrototypeOf(this);
        var clonado = Object.create(proto);

        clonado._name = this._name;
        clonado._shoppingList = [...this._shoppingList];

        return clonado;
    }
}

module.exports = Shopper;