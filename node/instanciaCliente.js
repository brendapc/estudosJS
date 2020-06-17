const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


const contadorC = require('./instanciaNova')() //invoca factory
const contadorD = require('./instanciaNova')()

contadorA.incrementar()
contadorA.incrementar()
console.log(contadorB.valor) // o contador b recebe os increments do contador A pois eles estão sob o mesmo intanciaUnica.js


contadorC.incrementar()
contadorC.incrementar()
console.log(contadorC.valor,contadorD.valor) // a factory impede isso
