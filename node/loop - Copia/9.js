const prompt = require("prompt-sync")();

let i = 0;
let opcao = 0;

console.log("Escolha um opção:")
console.log("1 - Entrar");
console.log("2 - Data Atual");
console.log("3 - Sair");
console.log("Digite aqui: ")
opcao = Number(prompt());

while (opcao != 3) {
    if (opcao == 1) {
        console.log("Olá, seja bem-vindo!");
        i++;
    }
    console.log("Escolha um opção:")
    console.log("1 - Entrar");
    console.log("2 - Data Atual");
    console.log("3 - Sair");
    console.log("Digite aqui: ")
    opcao = Number(prompt());
    if (opcao == 2) {
        console.log("Data atual: " + new Date());
        i++;
    }
    if (opcao == 3) {
        console.log("Saindo...");
        break;
    }
}

/* A função new Date foi recomendada no código para exibir a data atual, apenas a usei para não deixar uma data fixa. */