// exercicio de calculadora com callbacks.

function somar (numeroA, numeroB){
    return numeroA + numeroB;
}
function subtrair (numeroA, numeroB){
    return numeroA - numeroB;
}
function multiplicar  (numeroA, numeroB){
    return numeroA * numeroB;
}
function dividir (numeroA, numeroB){
    return numeroA / numeroB;
}

function calculadora (numeroA, numeroB, operacao){
    return operacao(numeroA, numeroB);
}

console.log(calculadora(5, 10, multiplicar));