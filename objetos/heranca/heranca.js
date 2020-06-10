const ferrari = {
    modelo: 'F40',
    velMsx: 325
}

const volvo = {
    modelo: 'V40',
    velMax1: 200
}

console.log(ferrari.__proto__) //se não encontrar o atributo procure no prototipo pai, no prototipo pai do  pai ... e etc
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)


function MeuObjeto (){}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

