const numeros = [2,3,6,5,10];

let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma = soma + numeros[i]
}

console.log(`Iteração For: ${soma}`);


let somaReduce = numeros.reduce(function(soma, i){
    return soma + i
},-10);

console.log(`Iteração Reduce: ${somaReduce}`);


const pessoas = [
    {
        nome:'Jose',
        idade:27
    },
    {
        nome:'Joao',
        idade:14
    },
    {
        nome:'Maria',
        idade:23
    },
    {
        nome:'Joana',
        idade:21
    },
    {
        nome:'Lucas',
        idade:32
    },   
    {
        nome:'Matheus',
        idade:15
    },     
    {
        nome:'Isa',
        idade:23
    },
    {
        nome:'Luiza',
        idade:17
    },    
]

//saida esperada
/* 
{
    maiores:[],
    menores:[]
}*/


const pessoasOrganizadas = pessoas.reduce(function(valorAcumulador, valorArray){
    const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';
    console.log(propMaiorOuMenor);

    valorAcumulador[propMaiorOuMenor].push(valorArray);
   
    return valorAcumulador;
},{ maiores:[], menores:[] });

console.log('Pessoas organizadas:', pessoasOrganizadas);