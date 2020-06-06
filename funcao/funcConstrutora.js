function Carro(velocidadeMax = 200, delta = 5){
    //atributo privado 
    let velocidadeAtual = 0

    //metodo publico "this" torna visivel para fora da função
    this.acelerar = function(){
        if(velocidadeAtual+delta <= velocidadeMax){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro //parenteses opcionais

/*nesse new carro acontece a "construção" da função
ela constroi um objeto a partir das noções determindas dentro da função

*/


uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro (350,20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

