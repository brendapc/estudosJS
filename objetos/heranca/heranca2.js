//prototype chain
const avo = {atrib1: 'a'}
const pai = {__proto__: avo, atrib2: 'b'}
const filho = { __proto__: pai, atrib3: 'c'}

console.log(filho.atrib1,filho.atrib2,filho.atrib3)
//----------------------------------------------------

const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if (this.velAtual + delta<=this.velMax){
            this.velAtual+= delta
        }else{
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}km/k de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing essa propriedade vale mais do que a do prototype
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` //super faz com que ele chame o status() do  prototipo, o this seria dentro desse obj
    }
}

Object.setPrototypeOf(ferrari,carro)
Object.setPrototypeOf(volvo,carro)

console.log(ferrari,volvo)

ferrari.aceleraMais(5)
console.log(ferrari)
ferrari.aceleraMais(200)
console.log(ferrari)
console.log(ferrari.status())


volvo.aceleraMais(201)
console.log(volvo.status())


ferrari.aceleraMais(150)
console.log(ferrari.status())



