// arrow functions simples.
let somar = (a, b) => a + b;
    console.log(somar(5,8));

let dobro = (a, b) => a * b;
    console.log(dobro(2,2));

// arrow function pra saber a hora atual.

let dataEHora = () => {
    let data = new Date();
    return data.getHours() + " : " +
    data.getMinutes();
}
        console.log(dataEHora(true));




    

