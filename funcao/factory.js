//factory simples
function criarPessoa(name,age,birthYear){
    return{
        name,
        age,
        birthYear
    }
}
console.log(criarPessoa('brenda',17,2002))
//-------------------------------------------
function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook', 2199,90))
console.log(criarProduto('ipad',1999,49))

