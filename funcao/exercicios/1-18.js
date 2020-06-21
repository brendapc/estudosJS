function porExtenso(numero){
    switch(numero){
        case 0:
            return 'zero'
            break;
        case 1:
            return 'um'
            break;
        case 2:
            return 'dois'
            break;
       case 3:
            return 'três'
            break;
        case 4:
            return 'quatro'
            break; 
            
        case 5:
            return 'cinco'
            break;
        case 6:
            return 'seis'
            break;
        case 7:
            return 'sete'
            break;
        case 8:
            return 'oito'
            break;
        case 9:
            return 'nove'
            break;
        case 10:
            return 'dez'
            break;
        default:
            return 'fora do intervalo'            
    }
}
console.log(porExtenso(0))
console.log(porExtenso(1))
console.log(porExtenso(2))
console.log(porExtenso(3))
console.log(porExtenso(4))
console.log(porExtenso(5))
console.log(porExtenso(6))
console.log(porExtenso(7))
console.log(porExtenso(8))
console.log(porExtenso(9))
console.log(porExtenso(10))
