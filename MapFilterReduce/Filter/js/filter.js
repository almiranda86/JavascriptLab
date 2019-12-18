const numeros = [2,3,6,5,10];

let novoArrayNumeros = [];

for(let i = 0; i < numeros.length; i++){
    console.log(`Numeros: ${numeros[i]*2}`);
    if(numeros[i] % 2 === 0){
        novoArrayNumeros.push(numeros[i]);
    }
}

console.log(`novoArrayNumeros: ${novoArrayNumeros}`);

const novoArrayNumerosFilter = numeros.filter(function(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return true;
    }
});

console.log(`novoArrayNumeros: ${novoArrayNumeros}`);


const numeroFiltrados = numeros.filter(numero => numero % 2 === 0);
console.log(`numeroFiltrados: ${numeroFiltrados}`);