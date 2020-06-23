//sem promise
const http = require('http')

const getTurma = (letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turmas${letra}.json`
    http.get(url,res =>{
        let resultado = ''

        res.on('data', dados=>{
            resultado += dados
        })
        res.on('end', () =>{
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []  //calback hell (evoid)
getTurma('A', alunos => { 
    nomes = nomes.concat(alunos.map(a=> `A: ${a.nomes}`))
    getTurma('B', alunos=>{
        nomes = nomes.concat(alunos.map(a=> `B ${b.nome}`))
        getTurma('C', alunos =>{
            nomes = nomes.concat(alunos.map(a=> `C ${c.nome}`))
            console.log(nomes)
        })
    })



})


