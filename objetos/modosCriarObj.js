//de forma literal
const obj1 ={
    //..
}

//função construtora Object do JS
const obj2 = new Object

//funções construtoras autorais
function Produto(nome, valor, desc){
    this.nome = nome  //pega a variavel "secreta" e coloca no this para ser visivel

    this.getPrecoComDesconto = ()=>{
        return valor * (1- desc)
    }
}

const produto1 = new Produto('caneta',5,0.1)
console.log(produto1.getPrecoComDesconto())
console.log(produto1.nome)//tem o this no nome instanciando ele publico
console.log(produto1.valor)//o valor não esta publico,portanto não pode ser acessado

//function Factory

function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30) * (30 - faltas)
        }
    }
}
const funcionario1 = criarFuncionario('julia',3000,3)
console.log(funcionario1.getSalario())

//object.create
const filhas = Object.create(null)
filhas.nome = 'Ana'
console.log(filhas)


//uma função que retorna um objeto
const fromJSON = JSON.parse('{"info": "sou um JSON"}')
console.log(fromJSON.info)
