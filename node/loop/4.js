const prompt = require("prompt-sync")();

let i;
let numero;
let soma = 0;

for(i=1; i<=10; i++) {
    numero = Number(prompt("Informe o número " + i + ": "))
    soma = soma + numero;
    console.log(soma);
}