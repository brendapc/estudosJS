function real(partes, ...valores){
    const resultado = []
    valores.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}

const preco = 20
const precoParcela = 2
console.log(real `1x de ${preco} ou 10x de ${precoParcela}`)