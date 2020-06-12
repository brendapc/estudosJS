const { relative } = require("path");

function week(num){
    switch(num){
    case 1:
    return 'fim-de-semana';
        break;
    case 2: 
    case 3:
    case 4:
    case 5:
    case 6:
        return 'dia-útil'
        break;
    case 7:
        return 'fim-de-semana';
    
    default: 'invalido';
    }
}
console.log(week(1))
console.log(week(2))
console.log(week(3))
console.log(week(4))
console.log(week(5))
console.log(week(6))
console.log(week(7))
console.log(week(8))
