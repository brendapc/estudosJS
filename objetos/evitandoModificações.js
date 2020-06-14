//object.preventExtensions - não consegue adicionar novos atributos ao objeto
const produto = Object.preventExtensions({
    nome: 'lustre',
    preco: 5.99,
    tag: 'compra'
})
console.log('extensivel:',Object.isExtensible(produto))

produto.nome = 'borracha'
produto.descricao = 'para apagar caneta'
delete produto.tag

console.log(produto)

//object.seal
const pessoa = {nome:'juliana', idade: 21}
Object.seal(pessoa) //não pode adicionar nem excluir mas pode editar

console.log('selado: ' , Object.isSealed(pessoa))
pessoa.sobrenome = 'Pereira'
delete pessoa.nome
pessoa.idade = 19
console.log(pessoa)

//object.freeze não pode mudar nada

