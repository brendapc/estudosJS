function operacoes(x,operacao,y){
    switch(operacao){
        case '+':
            return x + y 
            break;
        case '-':
            return x - y
            break;
        case '*':
            return x * y 
            break;
        case '/':
            return x/y
            break;    
        default:
            return 'operação invalida'
    }
}

console.log(operacoes(4,'+',2))
console.log(operacoes(4,'/',2))
console.log(operacoes(4,'*',2))
console.log(operacoes(4,'-',2))
console.log(operacoes(4,'a',2))
