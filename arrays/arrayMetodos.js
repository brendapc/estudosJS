const pilotos = ['vettel','alonso','Raikkonen','Massa']

pilotos.pop() //remove o ultimo elemento
console.log(pilotos)

pilotos.push('zé')
console.log(pilotos)

pilotos.shift()//remove o primeiro da lista
console.log(pilotos)

pilotos.unshift('hammilton')
console.log(pilotos)

//splice adicionar:
pilotos.splice(2,0,'bottas','massa')
console.log(pilotos)
//splice remove:
pilotos.splice(3,1,)
console.log(pilotos)


const algunsPilotos = pilotos.slice(2) //novo array,pega todos a partir da posição passada por parametro
console.log(algunsPilotos)

const algunsPilotos2 = pilotos.slice(2,5) //novo array,pega todos a partir da posição passada por parametro ate o proximo indice passado
console.log(algunsPilotos2)
