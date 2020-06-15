const escola = [{
    nome: 'turma M1',
    alunos: [{
        nome: 'gustavo',
        nota: 8.1
    }, {
        nome: 'ana',
        nota: 9.8
    }]
}, {
    nome: 'turma M2',
    alunos: [{
        nome: 'rebbecca',
        nota: 4.3
    }, {
        nome: 'marlene',
        nota: 5.6
    }]
}]

const getNotaDoAluno = aluno=>aluno.nota
const getNotaDaTurma = turma=>turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))  //usa o concat e o map para tranformar em um array só
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)
