// metodo para achar um elemento dento do array

let frutas = ["banana", "goiaba", "uva"];

let acharFruta = frutas.find(function(valor){
    return valor == "banana"
})

console.log(acharFruta);