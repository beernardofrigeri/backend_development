const prompt = require("prompt-sync")();

let i;
let nome;
let idade;
let altura;
let peso;

for(i = 0; i<5; i++) {
    nome = prompt("Informe o nome do usuário: ");
    idade = prompt("Informe a idade: ");
    altura = prompt("Informe a altura: ");
    peso = prompt("Informe o peso: ");
}