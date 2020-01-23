/*
1 - Obter um usuario
2 - Obter um numero de telefone do usuario, pelo seu id
3 - Obter o endereço do usuario, pelo seu id
*/

//modulo interno do Node
const util = require('util');

const obterEndereçoUsuarioAsync = util.promisify(obterEndereçoUsuario);

function obterUsuario(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve( {
                id:1,
                nome:'Jose',
                dataNascimento: new Date()
            })
        },1000)
    })
}

function obterTelefoneUsuario(idUsuario){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve( {
                numero: 912345678,
                ddd: 11
            })
        },2000)
    })
}

function obterEndereçoUsuario(idUsuario, callback){
    setTimeout(function(){
        return callback(null, {
            rua: 'hermanoteu',
            numero: 11
        })
    },2000)
}

const usuarioPromisse = obterUsuario();

usuarioPromisse
    .then(function(resultadoUsuario){
        return(obterTelefoneUsuario(resultadoUsuario.id))
            .then(function resolverTelefone(resultadoTelefone){
                return{
                    usuario:{
                        id: resultadoUsuario.id,
                        nome: resultadoUsuario.nome
                    },
                    telefone:{
                        numero: resultadoTelefone.numero,
                        ddd: resultadoTelefone.ddd
                    }   
                }
            })
}).then(function(resultado){
    const retornoEndereco = obterEndereçoUsuarioAsync(resultado.usuario.id)
        return retornoEndereco.then(function resolverEndereco(resultadoEndereco){
            return{
                usuario: resultado.usuario,
                telefone: resultado.telefone,
                endereco: resultadoEndereco
            }
        });
})
.then(function(resultadoFinal){
    console.log(`
        Nome: ${resultadoFinal.usuario.nome}
        Telefone: (${resultadoFinal.telefone.ddd}) ${resultadoFinal.telefone.numero}
        Endereco: Rua ${resultadoFinal.endereco.rua}, ${resultadoFinal.endereco.numero}
    `);
})
.catch(function(erroUsuario){
    console.log('Erro usuario', erroUsuario);
})