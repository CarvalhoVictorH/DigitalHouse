let readline = require('readline');
let cinema = "nome da loja"

let leitor = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

leitor.question("Qual o cinema gostaria de ver as sessões?\n", function (answer){
    let cinema = answer;
    console.log("sessoes para o cinema ", cinema);
    leitor.close();
    
});


