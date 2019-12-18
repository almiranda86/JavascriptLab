const numeros = [2,3,6,5,10];

let novoArrayNumeros = [];

for(let i = 0; i < numeros.length; i++){
    console.log(`Numeros: ${numeros[i]*2}`);
    novoArrayNumeros.push(numeros[i]*2);
}

console.log(`novoArrayNumeros: ${novoArrayNumeros}`);



const novoArrayNumerosMap = numeros.map(function(numero){
    return numero * 2;
});

console.log(`novoArrayNumerosMap: ${novoArrayNumerosMap}`);


const novoArrayArrow = numeros.map(numero => numero * 2);
console.log(`novoArrayArrow: ${novoArrayArrow}`);