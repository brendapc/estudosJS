const alunos = [
    {nome: 'joão', nota: 6.3, bolsista: false},
    {nome: 'maria', nota: 9, bolsista: true},
    {nome: 'pedro', nota: 7, bolsista: false},
    {nome: 'julis', nota: 8, bolsista: true}
]

//const bolsistas = alunos.map(a =>a.bolsista)
const temBolsista = (resultado,bolsista) => resultado && bolsista //se os dois retornam true
console.log(alunos.map(a=>a.bolsista).reduce(temBolsista))

const todosSãoBolsitas = (resultado,bolsista) => resultado || bolsista //se os dois retornam true
console.log(alunos.map(a=>a.bolsista).reduce(todosSãoBolsitas))