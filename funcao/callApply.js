//a diferença entre o Call e o Apply esta nos parametros

function getPreco(imposto = 0,moeda = 'R$'){
    return `${moeda}${this.preco * (1 - this.desconto) * (1 + imposto)}`
}
const produto = {
    nome: 'macbook',
    preco: 13500,
    desconto: 0.10,
    getPreco
}
console.log(produto.getPreco())
const carro = {
    preco: 49990,
    desconto: 0.20
}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17,'$')) //contexto,parametros
console.log(getPreco.apply(carro, [0.17,'$']))//contexto,parametros no array



