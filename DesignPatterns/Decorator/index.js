var Shopper = require('./Shopper');
var {InventoryItem, GoldInventoryItem, DiamondInventoryItem} = require('./InventoryItem');

var cliente = new Shopper('Jose', 5000);

var item1 = new InventoryItem('walkman', 50);
var item2 = new InventoryItem('colar', 100);

var itemOuro = new GoldInventoryItem(item2);

var itemOuroDiamante = new DiamondInventoryItem(itemOuro);

var itemDiamante = new DiamondInventoryItem(item1);

cliente.purchase(itemDiamante);
cliente.purchase(itemOuroDiamante);

cliente.printStatus();