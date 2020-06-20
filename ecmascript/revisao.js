//let e const 
{
    var a = 2
    let b = 3
    console.log(a)
    console.log(b)
}
console.log(a)
//console.log(b) // let tem escopo de bloco

//template String
const produto = 'iMac'
console.log(`${produto} é
caro
...`)

//destructuring

const [l,e, ...tras] = 'exemplo'
console.log(l,e, tras)

const [x,y] = [1,2]
console.log(x,y)
const [k, ,z] = [1,2,3]
console.log(k,z)

const {idade, nome} = {nome: 'ana', idade: 20}
console.log(idade,nome)


