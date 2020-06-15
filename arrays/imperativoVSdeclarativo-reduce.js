const alunos = [
    { nome: 'joao', nota:9},
    { nome: 'maria', nota:8}
]

//imperativo
let total1 = 0
for(let i=0;i<alunos.length;i++){
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

//declarativo - melhor
const getNota = alunos => alunos.nota
const soma = (total,atual)=> total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2)

const media = total2/alunos.length
console.log(media)

