const alunos = [
    {nome: 'joão', nota: 6.3, bolsista: false},
    {nome: 'maria', nota: 9, bolsista: true},
    {nome: 'pedro', nota: 7, bolsista: false},
    {nome: 'julis', nota: 8, bolsista: true}
]

const resultado = alunos.map(a=>a.nota).reduce(function(acumulador, atual){
    console.log(acumulador,atual) //processo de acumulação
    return acumulador+atual
})

console.log(resultado)
//resultado final da soma