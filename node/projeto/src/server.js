const porta = 3003
const bancoDeDados = require('./db')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))
app.get('/produtos',(req, res, next)=>{
    res.send({nome: 'notebook', preco: 1523.49}) // o metodo send vai converter p/ JSON
})
app.get('/produtos/:id', (req,res)=>{
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req,res,next)=>{
    const produtos = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(porta, ()=>{
    console.log(`servidor executando na porta ${porta}`)
})

