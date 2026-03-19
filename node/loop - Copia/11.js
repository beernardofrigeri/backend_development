const prompt = require("prompt-sync")();

let i = 0;
let numero;
let soma = 0;

while (numero != 0) {
    numero = Number(prompt("Digite um número (0 para sair): "));
    soma = soma + numero;
    i++;
}
console.log("A soma dos números é: " + soma);
console.log("Você digitou " + (i - 1) + " números.");