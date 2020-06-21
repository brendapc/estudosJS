function aumento(salario, plano){
    switch(plano){
        case 'A':
            return salario + (10/100 * salario)
            break;
        case 'B':
            return salario + (15/100 * salario)
            break;
        case 'C':
            return salario + (20/100 * salario)
            break;
        default:
            return 'Plano inválido.'
    }
}

console.log(aumento(2000,'A'))
console.log(aumento(2000,'B'))
console.log(aumento(2000,'C'))
