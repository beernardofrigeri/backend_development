const prompt = require("prompt-sync")();

console.log("Bem-vindo ao nosso sistema de hackeamento.")
console.log("Caso seu usuário for de administrador, escreva 'admin'.")
console.log("Não minta e nem se finja de outra pessoa, estamos te vendo.")
let user = String(prompt("Insira seu usuário: "))

if (user == 'admin') {
    console.log("Bem-vindo, administrador!")
}
else {
    console.log("Acesso negado " + user, "!")
}