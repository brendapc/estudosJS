function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opcao escolhida foi ${opcao}`)
}


/*let contador = 1
while(contador<=10){
    console.log(`contador = ${contador}`)
    contador++
}*/