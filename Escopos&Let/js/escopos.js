var global = "Valor Global";

function escopoGlobal(){
    console.log(`Valor de variavel global: ${global}`);
    document.getElementById('global').value = global;
}

function escopoFuncao(){
    var local = 'Valor local';
    console.log(`Valor de variavel local: ${local}`);
    document.getElementById('local').value = local;
}

//console.log(`Valor de variavel local, fora da função: ${local}`);


function escopoLocalEGlbal(){
    _local = 'Valor local window';
    console.log(`Valor de variavel local, sem var: ${_local}`);
    
    if(document.getElementById('_local')){
        document.getElementById('_local').value = _local;
    }
    
}

escopoLocalEGlbal();
console.log(`Valor de variavel local, fora da função, sem var: ${_local}`);
console.log(`Valor de variavel local, fora da função, sem var, atraves de window: ${window._local}`);


function imprimeThis(){
    console.log('Escopo dinamico: imprimeThis', this);
}

function imprimeMensagem(){
    imprimeThis.call({msg: 'Escopo dinamico: Sou um objeto' });
}

function imprimeOutraMensagem(){
    imprimeThis.call(['Escopo dinamico: Sou um array']);
}

imprimeMensagem();
imprimeOutraMensagem();
imprimeThis();



function usuario(){
    var nome = 'Escopo lexico: NomeUsuario';
    console.log(nome);

    return function(){
        var sobrenome = 'SobrenomeUsuario'
        console.log(nome, sobrenome);
    }
}

var fnRetorno = usuario();
fnRetorno();



if(true){
    var xpto = 'Escopo de bloco, sem a palavra let: '
    let xpto1 = 'Escopo de bloco, com a palavra let: '
    console.log(xpto);
    console.log(xpto1);
}

console.log(xpto);
//console.log(xpto1);


let valor = 'valor com let';
console.log(valor);

valor = 'novo valor com let'
console.log(valor);

{
    let valor = 'outro valor com let';
    console.log(valor);
}