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