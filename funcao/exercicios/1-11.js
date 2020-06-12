function year(ano){
    if(ano<=0){
        return false
    }else if(ano%400 == 0){
        return true
    }else if(ano%100 == 0){
        return false
    }else if(ano%4 == 0){
        return true
    }else{
        return false
    }
}

console.log(year(0))
console.log(year(4))
console.log(year(100))
console.log(year(400))
console.log(year(800))
console.log(year(2020))
console.log(year(2021))
