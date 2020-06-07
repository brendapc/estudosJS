//closure é o escopo criado quando a função é declarada
//esse escopo permite a funçõa acessar e manipular as variaveis externas á função

const x = 'Global'

function fora(){
    const x = 'Local' //dentro do escopo da função dentro()
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
