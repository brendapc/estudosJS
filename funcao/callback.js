const fabricantes = [ 'mercedes','audi','bmw']

function imprimir (nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante)
)

const notas = [ 2.3,6.3,5.6,8.6,9.2,6.7,7.2]

//sem callback

let notasBaixas = []
for(let i in notas){
    if(notas[i]<7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7  //retona true/false e coloca so os true dentro do array
})

console.log(notasBaixas2)

//arrow

const notasBaixas3 = notas.filter(nota => nota<7)
console.log(notasBaixas3)




