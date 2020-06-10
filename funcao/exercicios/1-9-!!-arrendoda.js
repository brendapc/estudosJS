function correcao(nota){
    let notaFinal = arredondar(nota)
    if(notaFinal<40){
        console.log(`nota final igual a ${notaFinal}, reprovado`)
    }else{
        console.log(`nota final igual a ${notaFinal}, aprovado`)
    }
}

function arredondar(nota){
    if(nota % 5 > 2){
        return nota + (5 - (nota%5))
       
    }else{
        return nota
    }
}

correcao(100)
correcao(30)
correcao(38)
correcao(88)
correcao(61)
