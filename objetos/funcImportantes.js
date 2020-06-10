const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e=>{
    console.log(`${e[0]}: ${e[1]}`)
})
//or
Object.entries(pessoa).forEach(([chave,valor])=>{  //destructuring
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, //vai ser listada?
    writable: false, //alteravel?
    value: '03/10/2002'
})
console.log(pessoa.dataNascimento)
pessoa.dataNascimento = '02/10/2002'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//object assign (ECMAsript 2015)
const dest = { a: 1}
const obj1 = {b: 2}
const obj2 = {c: 3, a:4}
const obj = Object.assign(dest, obj1, obj2)

//cria um array com chave valor 
console.log(obj)


Object.freeze(obj)
obj.c = 123
console.log(obj)

