//arrays são na verdade objetos em javascript

let aprovados = new Array('brenda' ,'jullia ','mariana')
console.log(aprovados)

aprovados = ['bia','maria','gabbie']
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3]='marcos'
console.log(aprovados[3])

aprovados.push('joão')
console.log(aprovados.length)


console.log(aprovados)
aprovados.sort()
console.log(aprovados)

console.log(aprovados[3])
delete aprovados[3]
console.log(aprovados)

aprovados.splice(3,1,'junior') //indice de inicio das alterações, quantos quer deletar a partir daquele indice, o que quer acrescentar depois disso
console.log(aprovados)
