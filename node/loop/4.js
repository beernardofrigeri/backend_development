const prompt = require("prompt-sync")();

let i;
let numero;
let soma = 0;

for(i=0; i<4; i++) {
    numero = Number(prompt("Informe o número da posição " + i + ": "))
    soma = soma + numero;
    console.log(numero);
    console.log(soma);
}