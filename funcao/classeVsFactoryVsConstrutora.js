//class
class Pessoa {
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('Brenda')
p1.falar()

//---------------------------
//factory 

const criarPessoa = nome =>{
    return{
        falar: () => console.log(`meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Bruna')
p2.falar()

//conclusão: a class pode dificultar as coisas pois o this pode variar

//função construtora

function Person(nome){

    this.nome = nome 
    this.falar = () => {
        console.log(`meu nome é ${this.nome}`)
    }
}

const p3 = new Person('Julia')
p3.falar()

