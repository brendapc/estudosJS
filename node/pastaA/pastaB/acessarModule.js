const moduloA = require('../../moduloA')

console.log(moduloA.ola)

const c = require('./pastaC')
console.log(c.oi)


const http = require('http')
http.createServer((req,res)=>{
    res.write('bom dia')
    res.end()
}).listen(8080)