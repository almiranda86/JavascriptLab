/*
1 - Obter um usuario
2 - Obter um numero de telefone do usuario, pelo seu id
3 - Obter o endereço do usuario, pelo seu id
*/

function obterUsuario(callback){
    setTimeout(function(){
        return callback(null, {
            id:1,
            nome:'Jose',
            dataNascimento: new Date()
        })
    },1000)
}

function obterTelefoneUsuario(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            numero: 912345678,
            ddd: 11
        })
    },2000)
}

function obterEndereçoUsuario(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            rua: 'hermanoteu',
            numero: 11
        })
    },2000)
}


obterUsuario(function resolverUsuario(erro, usuario){
    if(erro){
        return;
    }else{
        console.log('usuario', usuario);
        obterTelefoneUsuario(usuario.id, function resolverTelefone(erro1, telefone){
            if(erro1){
                return;
            }else{
                console.log('telefone', telefone);
                obterEndereçoUsuario(usuario.id, function resolverUsuario(erro2, endereco){
                    if(erro2){
                        return;
                    }else{
                        console.log('endereco', endereco);
        
                        console.log(`
                        Nome: ${usuario.nome}
                        Endereco: ${endereco.rua}, ${endereco.numero}
                        Telefone: (${telefone.ddd}) ${telefone.numero}
                    `); 
                    }
                });
            }
        });
    }
});


