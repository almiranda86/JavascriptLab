function escreva(){
    console.log("Hello World!\n");
}

function escrevaMensagem(mensagem){
    console.log(`Mensagem enviada: ${mensagem}`);
}

function soma(a, b){
    if(a == "" || a == undefined){
        a=0;
    }

    if(b == "" || b == undefined){
        b=0;
    }

    var resultado = parseInt(a) + parseInt(b);

    console.log(resultado);

    document.getElementById('resultado').value = resultado;
}

function escreverEndereco(rua, numero, bairro, ...complementos){
    var complementoEndereco=" ";
    if(complementos.length != 0){
        for(complemento of complementos){
            complementoEndereco += complemento+" ";
        }
    }
    var endereco = `O endereço informado é ${rua}, ${numero} - bairro ${bairro}`;
    
    if(complementoEndereco != ""){
        endereco += complementoEndereco;
    }

    console.log(endereco); 
    document.getElementById('endereco').value = endereco;
}

function somarTudo(numeros){
    var nums = numeros.split(',');
    
    var total=0;
    
    for(n of nums){
        total = total + parseInt(n);
    }

    console.log(total);
    document.getElementById('resultRangeSum').textContent = total;
}


(function autoInvoke(){
    console.log("Auto invocada");
}());



var somaDoisNumeros = function (a, b){
    if(a == "" || a == undefined){
        a=0;
    }

    if(b == "" || b == undefined){
        b=0;
    }

    return parseInt(a) + parseInt(b);
}

console.log("Soma dois numeros: "+somaDoisNumeros(3, 4));


function somaCallback(a, b, fn){
    var total = parseInt(a) + parseInt(b);
    if(document.getElementById('resultCallback')){
        document.getElementById('resultCallback').textContent = total;
    }
    
    return fn(total);
}

function callback (total){
    if(total == "" || total == undefined){
        total = 0;
    }

    var resultado = total * 2;

    if(document.getElementById('resultCallbackA')){
        document.getElementById('resultCallbackA').textContent = resultado;
    }

    console.log("callback: "+resultado);
}

console.log("somaCallback: "+somaCallback(2, 3, function(total){
    return total * 2;
}));



function valorDefault(valor1 = 'Valor 1', valor2 = 'Valor 2'){
    var valor = `${valor1} - ${valor2}`;
    console.log(`valorDefault ${valor1} - ${valor2}`);
    
    if(document.getElementById('resultValorDefault')){
        document.getElementById('resultValorDefault').textContent = valor;
    }
}

valorDefault();





