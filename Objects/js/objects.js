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

    if(document.getElementById("valorObjetoDestruct")){
        document.getElementById("valorObjetoDestruct").textContent = valores;
    }
    
    console.log(valores);
}

destructObject('A', 'B');


var destructObject = {
    valor1: 'valor1',
    valor2: 'valor2',
    valor3: 'valor3'
};

function destructObjectNovo({valor1, valor2, valor3, valor4 = 'valor4'}){
    var valores = `${valor1} - ${valor2} - ${valor3} - ${valor4}`;
   
    console.log(valores);
}

destructObjectNovo(destructObject);



var objectIteration = {
    valor1: 'valor1',
    valor2: 'valor2',
    valor3: 'valor3'
};

function iteration(objectIteration){
    var props = Object.keys(objectIteration);
    console.log(props);
    
    var valor="";
    var valorObjeto = "";

    for(var i = 0; i < props.length; i++){
        valor = valor + `${props[i]} - `;
        valorObjeto = valorObjeto + `${objectIteration[props[i]]} - `;
    }

    console.log("VALOR :" + valor);
    console.log("VALOR_OBJETO :" + valorObjeto);

    var valorOf="";
    var valorObjetoOf = "";
    for(var prop of props){
        valorOf = valor + `${props[i]} - `;
        valorObjetoOf = valorObjeto + `${objectIteration[props[i]]} - `;
    }

    console.log("VALOR_OF:" + valorOf);
    console.log("VALOR_OBJETO_OF :" + valorObjetoOf);


    var valorIn="";
    var valorObjetoIn = "";
    for(var prop2 in objectIteration){
        valorIn = valor + `${objectIteration[prop2]} - `;
        valorObjetoIn = valorObjeto + `${objectIteration[prop2]} - `;
    }

    console.log("VALOR_IN:" + valorIn);
    console.log("VALOR_OBJETO_IN :" + valorObjetoIn);
}

iteration(objectIteration);

