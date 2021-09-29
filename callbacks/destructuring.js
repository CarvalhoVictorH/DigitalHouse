// destructuring de array

let destinosIncriveis = ['Marrocos', 'Bariloche', 'Barcelona', 'China', 'Grecia']

let [marrocos, bariloche, barcelona, china, grecia] = destinosIncriveis;

console.log(bariloche);

// destructuring de objetos

let carro = {
    nome: "golf",
    ano: 2012
}

let {nome, ano} = carro;
console.log(nome, ano);