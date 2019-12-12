console.log("Memorização e Lexical Scope:")
function imprimeValor(){
    let nome = 'Jose';
    return function(){
        return nome;
    }
}

var fn = imprimeValor();
console.log(fn());



console.log("Função privada com closures:")
function minhaBiblioteca(){
    function auxiliar(valor){
        return 10 + valor;
    }
    return{
        add5(){
            return auxiliar(5);
        },
        add7(){
            return auxiliar(7);
        }
    }
}


var biblioteca = minhaBiblioteca();
console.log(biblioteca);
console.log(biblioteca.add5());
console.log(biblioteca.add7());



console.log("Closures evitando funções anonimas:")
function imprimeNome(nome){
    return function(){
        console.log(nome, 'Abadaba');
    }
}

function inicializa(){
    let nome = 'Jose';
    setTimeout(imprimeNome(nome), 1000)
}

inicializa();