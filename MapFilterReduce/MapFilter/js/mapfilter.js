const numeros = [2,3,6,5,10];

const arrayMapFilter = numeros.filter(numero => numero % 2 === 0).map(numero => numero * 2);

console.log(`arrayMapFilter: ${arrayMapFilter}`);