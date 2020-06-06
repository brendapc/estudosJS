//High-order function
//First class onject (citizen)

//criar de forma literal
function fun1(){

}

//armazenar em uma variavel
const fun2 = function(){

}

//armazenar função dentro do array
const array = [function soma(a,b){ return a+b}, fun1, fun2 ]
//mas é melhor criar funçoes armazenadas em variavel e depois organizar as variáveis em array
console.log(array[0](3,4))

//armazenar em atributo de objeto
const obj = {
}
obj.falar = function (){ return "ola"}
console.log(obj.falar())

//passar função como parametro
function run(func){
    func()
}

run(function () {console.log('executando')})

//uma função pode retornar/conter uma outra função
function soma(a,b){
    return function (c){
        console.log(a+b+c)
    }
}

soma(2,3)(5)
//or
const cincoMais = soma(2,3)
cincoMais(5)
