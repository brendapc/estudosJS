//arrow function

const soma = (a,b) => a + b  //retorno implicito
console.log(soma(2,3))

//this na arrow
const lexico1 = () => console.log(this === exports)
console.log(lexico1)

//parametro default

function log(texto = 'node'){
    console.log(texto)
}
log()
log('oi')

//operador rest ou spread -> ...

function total(...numbers){
    let total = 0
    numbers.forEach(b=> total += b)
    return total
}
console.log(total(2,3,4,5))

