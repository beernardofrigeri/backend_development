const prompt = require('prompt-sync')();

let nome = prompt("Informe o nome do cliente: ")
let nomeAtendente = prompt("Informe o nome do atendente: ")

console.log("Bem-vindo(a)! Fique à vontade para escolher um de nossos produtos: ")

lanches = ("Xis Normal: \n1.1 - G - R$: 25,00 \n1.2 - M - R$: 23,00 \n1.3 - P - R$: 20,00 \nHamburguer: \n2.1 - G - R$: 22,00 \n2.2 - M - R$: 19,90 \n2.3 - P - R$: 16,00 \nCachorro Quente: \n3.1 - G - R$: 17,00 \n3.2 - M - R$: 15,00 \n3.3 - P - R$: 12,00")

console.log(lanches)
let pedido = Number(prompt("Insira o número respectivo ao pedido: "));

let xisGrande = 0;
let xisMedio = 0;
let xisPequeno = 0;
let hamburguerGrande = 0;
let hamburguerMedio = 0;
let hamburguerPequeno = 0;
let cachorroGrande = 0;
let cachorroMedio = 0;
let cachorroPequeno = 0;
if (pedido = 1.1) {
    console.log("1 Xis Grande, registrado.")
    xisGrande++;
}
if (pedido = 1.2) {
    console.log("1 Xis Médio, registrado.")
    xisMedio++;
}
if (pedido = 1.3) {
    console.log("1 Xis Pequeno, registrado.")
    xisPequeno++;
}
if (pedido = 2.1) {
    console.log("1 Hamburguer Grande, registrado.")
    hamburguerGrande++;
}
else if (pedido = 2.2) {
    console.log("1 Hamburguer Médio, registrado.")
    hamburguerMedio++;
}
else if (pedido = 2.3) {
    console.log("1 Hamburguer Pequeno, registrado.")
    hamburguerPequeno++;
}
else if (pedido = 3.1) {
    console.log("1 Cachorro Quente Grande, registrado.")
    cachorroGrande++;
}
else if (pedido = 3.2) {
    console.log("1 Cachorro Quente Médio, registrado.")
    cachorroMedio++;
}
else if (pedido = 3.3) {
    console.log("1 Cachorro Quente Pequeno, registrado.")
    cachorroPequeno++;
}
else {
    console.log("Opção inválida.")
}