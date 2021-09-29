let sites = ["www.google.com","www.yahoo.com"];

let sitesHttp = sites.map(function(valor){
    return "http>//" + valor;
})

let numeros = [2, 4, 6];

let dobroNumeros = numeros.map(function(valor){
    return valor * 2;

})

let numeros2 = [1, 2, 3, 4]

let triploNumeros = numeros2.map(function(valor){
    return valor * 3;
})

console.log(triploNumeros);

