console.log(soma(2,3))  //mesmo antes da função ser declarada o js lê a funçõa declarada como a 'soma'
console.log(sub(4,2)) //not defined


//function declaration
function soma (x,y){
    return x+y
}

//function expression
const sub = function(x,y){
    return x-y
}

//named function expression
const mult = function mult(x,y){
    return x*y
}

