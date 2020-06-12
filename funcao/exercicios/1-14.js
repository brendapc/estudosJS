function frutas(fruta){
    switch(fruta){
        case 'maça':
            return'não vendemos esta fruta aqui'
            break;
        case 'kiwi':
            return 'estamos sem kiwis'
            break;
        case 'melancia':
            return 'aqui está. são 3 reais o kilo'
    
        default: return 'erro' 
    }   
}

console.log(frutas('maça'))
console.log(frutas('kiwi'))
console.log(frutas('melancia'))
