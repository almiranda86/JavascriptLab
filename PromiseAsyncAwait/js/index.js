/*
1 - Obter um usuario
2 - Obter um numero de telefone do usuario, pelo seu id
3 - Obter o endereço do usuario, pelo seu id
*/

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

function obterEnderecoUsuario(idUsuario){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            return resolve( {
                rua: 'hermanoteu',
                numero: 11
            })
        },2000)
    })
} 


main();
async function main(){
    try{
        console.time('medida-promise');
        const usuario = await obterUsuario();
        //const telefone = await obterTelefoneUsuario(usuario.id);
        //const endereco = await obterEnderecoUsuario(usuario.id);

        const resultado = await Promise.all([
            obterTelefoneUsuario(usuario.id),
            obterEnderecoUsuario(usuario.id)
        ]);

        const telefone = resultado[0];
        const endereco = resultado[1];

        console.log(`
            Nome: ${usuario.nome}
            Telefone: (${telefone.ddd}) ${telefone.numero}
            Endereco: Rua ${endereco.rua}, ${endereco.numero}
        `);

        console.timeEnd('medida-promise');
    }
    catch(error){
        console.log("Erro:", error);
    }
}
