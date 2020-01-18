var CatalogItem = require('./CatalogItem');

var boots = new CatalogItem('botas de couro', 80);
var tenis = new CatalogItem('adidas', 200);
var chinelo = new CatalogItem('havaianas', 50);

console.log('total botas: ', `$${boots.total}`);

boots.print();
tenis.print();