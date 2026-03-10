const prompt = require("prompt-sync")();

let opcao;

console.log("Opções: 1 - Oi.")
console.log("Opções: 2 - Hola.")
console.log("Opções: 3 - Ciao.")

opcao = Number(prompt("Informe a sua opção: "))

switch(opcao) {
    case 1: 
        console.log("Oi.")
        break;
    case 2:
        console.log("Hola.")
        break;
    case 3:
        console.log("Ciao.")
        break;
        default:
            console.log("Hi.")
}