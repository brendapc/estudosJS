//IIFE- função auto-invocada, usada para "fugir" do escopo global do browser
//Immediately Invoked Function Expression

(function(){
    console.log("sera executado na hora!")
    console.log('foge do escopo mais abrangente')
    console.log("OMG!!")
})() //esse ultimo par de parenteses é a "invocação"
