let dobro = function (a){
    return 2 * a
}
//arrows:

dobro = (a) =>{
    return 2 * a
}
//ou:
dobro = a => 2 * a  //retorno implicito

console.log(dobro(5))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' //sem parâmetro
ola = _ => 'Olá' //com um parametro anonimo

console.log(ola())

