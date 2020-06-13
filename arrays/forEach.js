const aprovados = ['julia','maria','ana','juliana']

aprovados.forEach((nome,indice)=>{
    console.log(`${indice+1}) ${nome}`)  
})
//-------------outro modo-----------
aprovados.forEach(nome => console.log(nome))

//-------------outro modo-----------

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

//----------------------------------

//simulando o forEach:
Array.prototype.foreach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i],i,this)
    }
}

const approved = ['agatha','marta','tania']

approved.foreach(function(nome,indice,){
    console.log(`${indice +1}) ${nome}`)  
})

