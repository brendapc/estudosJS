console.log(this === global)
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

//module.exports e exporta apontam para a mesma coisa

function entendendoThis(){
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

entendendoThis()
