function criarObjetoSimples(nome, idade, email){
    var usuario = {
        nome: nome,
        idade: idade,
        email: email,
        competencias:{
            programacao:['C#', 'Javascript'],
            idiomas:['ingles', 'frances']
        }
    }

    var valor = `Valor do objeto Usuario: Nome - ${usuario.nome}, Idade - ${usuario.idade}, Email - ${usuario.email}`;
    console.log(usuario);
    console.log(valor);

    usuario.ano = 2019;
    console.log("Atualizando o objeto");
    console.log(usuario);
    console.log(valor);

    if(document.getElementById('valorObjeto')){
        document.getElementById('valorObjeto').textContent = valor;
    } 
}

function criarObjetoFuncao(name){
    var usuario ={
        digaOi(name){
            if(name != "" && name != undefined){
                return `Olá ${name}`;
            }
        }
    }

    console.log(usuario);
    console.log(usuario.digaOi(name));
    console.log(usuario.digaOi('Andre'));
}


function mergeObjects(){
    var usuario = {
        nome:'Andre',
        idade: '33'
    };

    var extra ={
        pais:'Brasil',
        estado: 'SP'
    };

    console.log(usuario);
    console.log(extra);

    document.getElementById("objeto1").textContent = usuario;
    document.getElementById("objeto2").textContent = extra;

    var merged = Object.assign({}, usuario, extra);

    console.log("Mergiado com Object.assign:");
    console.log(merged);
    document.getElementById("mergeObjeto").textContent = merged;

    var merged2 = {
        ...usuario,
        ...extra
    }
    
    console.log("Mergiado com spread:");
    console.log(merged2);
}


function objectGetSet(){
    var usuarios=[
        {
            nome:"Andre",
            idade:33
        },
        {
            nome:"Jose",
            idade:19
        },
        {
            nome:"Ana",
            idade:50
        },
    ];

    var usuario = {
        posicao: 0,
        
        get atual(){
            return usuarios[this.posicao]
        },

        set atual(posicao){
            this.posicao = posicao;
        },

        proximo(){
            ++this.posicao;
        },

        anterior(){
            --this.posicao;
        }
    }

    console.log(usuario.atual);
    usuario.proximo();

    console.log(usuario.atual);
    usuario.proximo();

    console.log(usuario.atual);
    usuario.anterior();

    usuario.atual = 0;
    console.log(usuario.atual);

    usuario.atual = 2;
    console.log(usuario.atual);
}


function destructObject(valor1, valor2, valor3){
    var novoObjeto = {
        valor1: valor1,
        valor2: valor2,
        valor3:{
            valor: valor3
        } 
    };

    var {valor1: primeiroValor, 
         valor2, 
         valor3:{ valor = 'Default'}} = novoObjeto;
    var valores = `${primeiroValor} - ${valor2} - ${valor}`;

    document.getElementById("valorObjetoDestruct").textContent = valores;
    console.log(valores);
}