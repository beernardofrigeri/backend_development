const prompt = require("prompt-sync")();

let numero = Number(prompt("Insira o número: "))

if (numero % 2 == 0){
    console.log("O número é par! Redondo.")
}
else {
    console.log("O número é ímpar! Que coisa.")
}