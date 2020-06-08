function jurosSimples(cInicial,taxa,tempo){
    let juros = cInicial * (taxa/100) * tempo
    let montante = juros + cInicial
    console.log(montante)
}

jurosSimples(2000,2,2)

function jurosCompostos(cInicial,taxa,tempo){
    let montante = cInicial * (1+(taxa/100))**tempo
    console.log(montante)
}

jurosCompostos(2000,2,2)
