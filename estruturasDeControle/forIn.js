const notas = [6.7, 7.4,9.8,4.3, 7.7]

for(let i in notas){
    console.log(i,notas[i])
}

const pessoa ={
    nome: 'brenda',
    sobrenome: 'pereira',
    idade: 17,
    peso: '60kg'

}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}