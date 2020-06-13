const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil == true //retorna os produtos que são frageis
}))

const caros = p => p.preco>1000  // o p aqui so serve para representar o parametro que quando a função for usada sera o array
const frageis = p=> p.fragil == true
console.log(produtos.filter(caros).filter(frageis))
//--------------------------------------------------------------