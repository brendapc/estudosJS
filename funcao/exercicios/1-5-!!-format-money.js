function formata(valor){
    valorFinal = `R$${valor.toFixed(2).toString().replace('.',',')}`
    console.log(valorFinal)
}

formata(3.454545)
