function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)
// != Object.prototype, isso tudo aqui é o prototype da função

MeuObjeto.prototype.nome = 'anônimo' // definindo um padrão
MeuObjeto.prototype.falar = function(){console.log(`bom dia meu nome é ${this.nome}! `)}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'obj3'
obj3.falar()
//------------

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log((MeuObjeto.__proto__) === Function.prototype)
console.log(Function.prototype.__proto__ ===Object.prototype)
//veja o print no repositório