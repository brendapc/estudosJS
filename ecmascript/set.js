//não aceita repetição e não tem índice
const times = new Set()

times.add('Grêmio').add('Juventude')
times.add('Juventude').add('Aimoré').add('Pelotas').add('InternacionalB')


console.log(times)
console.log(times.size)
console.log(times.has('Grêmio'))
times.delete('InternacionalB')
console.log(times)

const nomes = ['Ana','Maria','Bruna','Beatriz','Isadora','Bruna']
const nomesSet = new Set(nomes)

console.log(nomesSet)
