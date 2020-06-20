//operador ... rest(juntar) spread (espalhar)

//usar spread com obj
const funcionario = { nome: 'Marta', salario: 600}
const clone = {ativo: true, ... funcionario}

console.log(clone)

//usar spread no array
const grupoA = ['Brenda','julia','mariana']
const grupoFinal = ['joana', ...grupoA, 'pedro']
console.log(grupoFinal)
