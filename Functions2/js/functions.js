function globalThis(){
    console.log(this);
}


//new object
function objectTest(){
    this.a = 'a'
    this.b = 'b'
    this.c = 'c'
    this.metodo = function(){
        return 'd';
    }
}

function newObject(){
    //console.log(new objectTest());
    var objecttest = new objectTest();
    console.log(objecttest);
}



//call
//
var varCall={
    nome: 'Call'
}

function usingCall(p1, p2, p3){
    console.log(`p1: ${p1}, p2: ${p2}, p3: ${p3}`);
    console.log('varCall: ', this);
}

usingCall.call(varCall, 'abadaba', 123, [5,6,7]);



//apply
//
var varAplly={
    nome: 'Apply'
}

function usingApply(p1, p2, p3){
    console.log(`p1: ${p1}, p2: ${p2}, p3: ${p3}`);
    console.log('varApply: ', this);
}

usingApply.apply(varAplly, ['abadaba', 123, [5,6,7]]);



//bind
//
var varBind={
    nome: 'Bind'
}

function usingBind(p1, p2, p3){
    console.log(`p1: ${p1}, p2: ${p2}, p3: ${p3}`);
    console.log('varBind: ', this);
}

var bindFn = usingBind.bind(varBind, 'A1', 'B1');
bindFn('C1');



//Arrow function
//

var usingArrowFunction = () => {
    return console.log(`Arrow Function ${soma(2, 5)}`);
}

var soma = (a, b) => {
    return a + b;
}

console.log(`Arrow Function: ${soma(1,2)}`);

var retornaObjeto = (p3) => (
    {
        p1: 'P1',
        p2: 'P2',
        p3
    }
)

console.log(retornaObjeto('p3'));