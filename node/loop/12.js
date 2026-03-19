const prompt = require("prompt-sync")();

let i;
let maiores = 0;
let media = 0;
let soma = 0;

for (i = 1; i <= 5; i++){
    let nome = prompt("Informe o nome do usuário: ")
    let idade = Number(prompt("Informe a idade do usuário: "))
    if (idade >= 18) {
        maiores++;
    }
    soma = soma + idade;
}
    media = soma / 5;
    console.log("Pessoas que são maiores de idade: " + maiores)
    console.log("Média total de idades: " + media)