const prompt = require("prompt-sync")();

let senha = Number(prompt("Insira sua senha: "))

if (senha == 1234) {
    console.log("Bem-vindo!")
}
else {
    console.log("Acesso negado!")
}