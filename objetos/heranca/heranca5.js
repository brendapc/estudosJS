console.log(typeof String) 
console.log(typeof Array) 
console.log(typeof Object)

String.prototype.reverte = function(){
    return this.split('').reverse().join('')
}

console.log('Ola meu nome é brenda'.reverte())

Array.prototype.first = function(){
    return this[0]
}
console.log([5,4,3,2].first())

//----------------------------
function Aula(nome,videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('bem vindo',122)
const aula2 = new Aula('até breve',456)

console.log(aula1,aula2)

//simulando o que o "new" faz atraves de uma função
function novo(f,...params){
    const obj = {} //cria obj
    obj.__proto__ = f.prototype //associa o prototipo do obj com prot. da funcao
    f.apply(obj,params) //passa os parametros
    return obj
}

const aula3 = novo(Aula,'Bem vindo', 123)

console.log(aula3)
