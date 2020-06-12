//json -> formato de DADOS, texto
const obj = {a: 1 ,b:2,c:3, soma(){return a+b+c} }// objeto -> JSON
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a": true,"b":2,"c": "string", "d":{}, "e":[]}')) //JSON -> objeto

