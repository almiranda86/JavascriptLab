console.log("Introdução a constantes");

const anoNascimento = 1986;
console.log(anoNascimento);

function introConstFn(){
    const anoNascimento = 1986;
    document.getElementById("introConst").value = anoNascimento;    
}



console.log("Constante dentro de um bloco");
if(true){
    const nome = "Andre";
    console.log(nome);
}
console.log("Constante dentro de bloco, sendo chamada fora dele");
//console.log(nome);


console.log("Redeclaração e Redefinição");

console.log("Definimos a constante");
const dominios = ['JS', 'Python', 'Go'];
console.log(dominios);
console.log("Modificamos a constante");
dominios[1] = 'C#';
console.log(dominios);

console.log("Definimos a constante, como objeto");
const user = {
    nome: 'Andre',
    idade: 33
};
console.log(user);
console.log("Modificamos a constante");
user.cidade = 'São Paulo';
console.log(user);
