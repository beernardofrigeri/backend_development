const prompt = require("prompt-sync")();

let i = 0;
let senha;

while(senha != "12345"){
    senha = prompt("Digite aqui: ")
    i++;
}
console.log("Senha correta! Você tentou " + i + " vezes.")