function verify(num){
    if(Math.floor(num)%3 == 0){
        return true
    }else{
        return false
    }
    
}

console.log(verify(6))
console.log(verify(7))
console.log(verify(9.5))
console.log(verify(6.5))
