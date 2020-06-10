const pai = {nome: 'pedro', corCabelo: 'loiro'}

const filha1 = Object.create(pai) //cria o filha a partir do pai

filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable:true}
})

console.log(filha2.nome)
filha2.nome = 'joana'
console.log(filha2.nome)

console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //não lista heranças
console.log(Object.keys(filha2))



for(let key in filha2){
    filha2.hasOwnProperty(key) ? //se true
        console.log(key): console.log(`por herança: ${key}`)//se false
}                              

//apenas lista as propriedades que são proprias da filha2 e os que não são, são mostrados com um "por herença:" na frente :)
