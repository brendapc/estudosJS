const produto = new Object //chama função objeto

produto.preco = 220
//or
produto['marca'] = 'generica'

console.log(produto)

delete produto.preco

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietario: {
        nome: 'Brenda',
        idade: 21,
        endereco:{
            logradouro: 'rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },
    {
        nome:'Daniela',
        idade: 43
    }],
    calcaularValorSeguro: function(){
        //...
    }

}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'bca'
delete carro.calcaularValorSeguro

console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)

