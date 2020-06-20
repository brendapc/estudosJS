//object.values e object.entries(chave,valor)
const obj = { a:1, b:3,c:5}
console.log(Object.entries(obj))
console.log(Object.values(obj))

//melhoria na declaração de obj
const nome = 'carla' //oj criado

const pessoa = {
    nome,
    ola(){
        return 'ola'
    }
}
console.log(pessoa.nome,pessoa.ola())

//class
class Animal {}
class Cachorro extends Animal {
    falar(){
        return 'auauau'
    }
}

console.log(new Cachorro().falar())

