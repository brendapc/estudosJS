//com promise
const http = require('http')

const getTurma = (letra, callback)=>{
    const url = `http://files.cod3r.com.br/curso-js/turmas${letra}.json`
    return new Promise ((resolve, reject)=>{
        http.get(url,res =>{
            let resultado = ''
    
            res.on('data', dados=>{
                resultado += dados
            })
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

/*let nomes = []  //calback hell (evoid)
getTurma('A').then(alunos => { 
    nomes = nomes.concat(alunos.map(a=> `A: ${a.nomes}`))
    getTurma('B').then( alunos=>{
        nomes = nomes.concat(alunos.map(a=> `B ${b.nome}`))
        getTurma('C').then(alunos =>{
            nomes = nomes.concat(alunos.map(a=> `C ${c.nome}`))
            console.log(nomes)
        })

    })
})
*/
Promise.all([getTurma('A'),getTurma('B'),getTurma('C')])
.then(turmas => [].concat(...turmas))
.then(x=> console.log(x))
.then(alunos => alunos.map(aluno=>aluno.nome))
.then(nomes => console.log(nomes))

