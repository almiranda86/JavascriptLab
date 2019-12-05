// function globalThis(){
//     console.log(this);
// }


// //new object
// function objectTest(){
//     this.a = 'a'
//     this.b = 'b'
//     this.c = 'c'
//     this.metodo = function(){
//         return 'd';
//     }
// }

// function newObject(){
//     //console.log(new objectTest());
//     var objecttest = new objectTest();
//     console.log(objecttest);
// }



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