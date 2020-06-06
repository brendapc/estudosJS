let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global)
//--------------------
const obj = {}

comparaComThis = comparaComThis.bind(obj)  //agora o this aponta para obj

comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //false
comparaComThisArrow(this) //true
comparaComThisArrow(module.exports) //true

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)  //arrow é mais forte que o bind()
