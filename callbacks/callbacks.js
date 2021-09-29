// callback de uma operação simples de multiplicação, onde foi usado
// arrow functions para cria-lo.

const multiplicar = (numeroA, numeroB) => numeroA * numeroB;

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

console.log(calculadora(30, 10, multiplicar));
