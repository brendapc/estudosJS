//o this varia de acordo com o modo pelo qual ela é chamada
//com a arrow function ()=> ele NÃO VARIA

//this e a função "bind"
const pessoa ={
    saudacao: "ola",
    falar(){ //-> isso é um metodo na versão ecmascript :O
        console.log(this.saudacao)  //->avisando que o saudação vem daqui
    }
}
pessoa.falar()


const falar = pessoa.falar  //conflito entre programção funcional e O. á Obj
falar()

const falarPessoa = pessoa.falar.bind(pessoa) //amarrou em "pessoa"
falarPessoa()

//--------------------------------------------------
//com função anonima 
 
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)//milissegundos
}
new Pessoa 

/*


//função não anonima
function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)//chamou a função bind
}
new Pessoa

*/
    //Com o self (alternativa ao bind)
    /*
    function Pessoa() {
        this.idade = 0
    
        const self = this
        setInterval(function() {
            self.idade++
            console.log(self.idade)
        }, 1000)//chamou a função bind
    }
    new Pessoa
    */