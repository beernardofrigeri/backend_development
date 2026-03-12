const prompt = require("prompt-sync")();

for(let i = 1; i<=5; i++) {
    numero = Number(prompt("Informe " + i + "°: "))
    console.log(numero);
}