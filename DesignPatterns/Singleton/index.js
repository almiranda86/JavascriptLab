var logger = new require('./Logger');
var Shopper = new require('./Shopper');
var Store = new require('./Store');

logger.log('Inicializando app...');

var cliente = new Shopper('Jose', 500);
var loja = new Store('Livros e Discos', [{
    item:'1984',
    qtde:10,
    valor:40
},
{
    item:'Powerslave',
    qtde:2,
    valor:180
}]);

logger.log('Finalizando configuração...');

console.log(`${logger.count} total de logs`);
logger.logs.map(log => console.log(`${log.message}`));