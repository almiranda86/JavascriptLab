console.log('local storage len: ', localStorage.length);

var uid = localStorage.getItem('user_id');

console.log('user_id: ', uid);

if(!uid){
    console.log('Usuario nao encontrado. Configurando usuario e toke...');
    localStorage.setItem('token','45SD465D4FS5S45FSSDS54');
    localStorage.setItem('user_id', '12345')
}else{
    console.log('user_id', uid);
    console.log('Limpando o user id...');
    localStorage.clear();
}