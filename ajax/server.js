const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) /* dentro da pasta atual sirva os arquivos estáticos (Js,Json, css, html) */
app.use(bodyParser.urlencoded({extended: true})) /* se vier dados a partir de um submit de um formulário le os dados e transforma em objeto*/
app.use(bodyParser.json()) /* se vier json, transforme em objeto */

app.get('/teste', (req,res) => res.send('ok')) /* middleware chamado a partir de uma req get */
app.listen(8080, ()=> console.log('executando...'))