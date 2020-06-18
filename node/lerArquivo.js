const fs = require('fs') //vem previamente instalado

const caminho = __dirname + '/arquivo.json'

//sincrono... não recomendado
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assicrono... melhor
fs.readFile(caminho,'utf-8', (err,conteudo)=>{
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})


//quando o arquivo é json:
const config = require('./arquivo.json')
const { dirname } = require('path')
console.log(config.db)

//leitura de pasta

fs.readdir(__dirname, (err, arquivos)=>{
    console.log('conteudo da pasta:')
    console.log(arquivos)
})

// dirname -> diretório atual!
