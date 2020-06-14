Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i=0;i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 12.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: false}
]

const caros = p => p.preco>1000  // o p aqui so serve para representar o parametro que quando a função for usada sera o array
const frageis = p=> p.fragil == true
console.log(produtos.filter2(caros).filter2(frageis))
