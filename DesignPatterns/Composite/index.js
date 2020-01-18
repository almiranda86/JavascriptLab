var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem('botas de couro', 80);
var tenis = new CatalogItem('adidas', 200);
var chinelo = new CatalogItem('havaianas', 50);

var grupo = new CatalogGroup('Tenis e mais', [boots, tenis, chinelo]);

var grupo_comida = new CatalogGroup('Comida', [
    new CatalogItem('milkshake', 10),
    new CatalogItem('batata fria', 10),
]);

var keychain = new CatalogItem('Key Chain', .50);

// console.log('total botas: ', `$${boots.total}`);
// console.log('total tenis: ', `$${grupo.total}`);

// boots.print();
// tenis.print();

// grupo.print();

var catalog = new CatalogGroup('Comida e Roupa', [keychain, grupo, grupo_comida]);

console.log(`$${catalog.total}`);
catalog.print();