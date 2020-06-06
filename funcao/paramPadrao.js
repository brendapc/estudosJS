function soma1(a,b,c) {
    a = a || 1
    b = b || 1 //definde valor padrão caso seja undefined
    c = c || 1
    return a+b+c 
}

console.log(soma1(), soma1(3), soma1(1,2,3),soma1(0))
//outras formas
function soma2(a,b,c) {
    a = a !== undefined ? a:1
    b = 1 in arguments ? b:1    //? = "se não" operador ternario
    c = isNaN(c) ? 1:c  //-> mais segura
    return a+b+c
}
console.log(soma2(),soma2(1,2,3),soma2(0,0,0), soma2(4))

//ECMAscript ------------------------------------------------------------

function soma3(a = 1, b = 1, c = 1) {
    return a+b+c
}

console.log(soma3(),soma3(1,2,3),soma3(0,0,0), soma3(4))

