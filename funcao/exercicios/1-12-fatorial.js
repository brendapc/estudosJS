function fatorial(num){
    let fatorial = 1

    for(i=num;i>0;i--){
       fatorial  *= i
    }
    return fatorial
}

console.log(fatorial(2))
console.log(fatorial(5))
//or 

function fatorial (numero) {
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}