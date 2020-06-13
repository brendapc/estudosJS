const nums =[1,2,3,4,5,6]

//map é um for com um proposito
//gera um novo array
let resultado = nums.map(function(e){
    return e*2
})

console.log(resultado)

const soma10 = e =>{ return e+10}
const triplo = e => e*3 //retorno implicito
const paradinheiro = e => `R$${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paradinheiro)

console.log(resultado)

//------------------------------------------------------------------------

const carrinho = [
'{"nome": "borracha", "preco": 3.45}',
'{"nome": "caderno", "preco": 13.90}',
'{"nome": "kitlapis", "preco": 41.22}',
'{"nome": "caneta", "preco": 7.50}'
]

//retornar um array com apenas os preços
const paraObjeto = json => JSON.parse(json)
const result = carrinho.map(JSON.parse).map(produto => produto.preco)

console.log(result)

//outro modo

const paraObj = json=>JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultAlternativo = carrinho.map(paraObj).map(apenasPreco)

console.log(resultAlternativo)

