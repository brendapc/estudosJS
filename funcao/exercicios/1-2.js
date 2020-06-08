function triangles(a,b,c){
    if(a == b && b == c ){
        console.log('equilatero')
    }else if(a == b || b == c || a == c){
        console.log('isósceles')
    }else{
        console.log('escaleno')
    }
}

triangles(2,2,2)
triangles(2,2,3)
triangles(2,3,4)
