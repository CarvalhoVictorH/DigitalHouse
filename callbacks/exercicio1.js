// callback das letras iniciais, dos nomes recebidos por parametro.
let iniciais = (nome, sobrenome) => nome[0] + sobrenome[0];

let saudar = (nome, sobrenome, operacao) => "Olá " + operacao(nome, sobrenome)

console.log(saudar("Victor", "Hugo", iniciais));

