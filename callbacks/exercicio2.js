function dobro  (numeroA){
    return numeroA * 2;
}
function triplo (numeroA){
    return numeroA * 3;
}

function aplicar(numeroA, operacao){
    return operacao(numeroA)
}
console.log(aplicar(5, dobro));