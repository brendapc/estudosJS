function compara(dado){
    var jogos = [10, 20 ,20, 8 ,25, 3, 0, 30]
    var melhor = [ ]
    var pior = []
    var result = []

    for(let i=0;i<jogos.length; i++){
        if(jogos[i]< dado){
        melhor.push(jogos[i])
       }else{
        pior.push(jogos[i])
       }
    }

    result.push(melhor.length,pior.length)
    console.log(result)
}

compara(15)



