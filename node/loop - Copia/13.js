const promtpt = require('prompt-sync')();

let i = 0;
let j = 0;
let k = 0;
let opcao = 0;

console.log("Escolha um opção:")
console.log("1 - Candidato Armindo");
console.log("2 - Candidato Beltrano");
console.log("3 - Candidato Carlos");
console.log("0 - Sair. ")
console.log("Digite aqui: ")
opcao = Number(promtpt());

while (opcao != 0) {
    if (opcao == 1) {
        console.log("Você votou no candidato Armindo!");
        i++;
    }
    console.log("Escolha um opção:")
    console.log("1 - Candidato Armindo");
    console.log("2 - Candidato Beltrano");
    console.log("3 - Candidato Carlos");
    console.log("0 - Sair. ")
    console.log("Digite aqui: ")
    opcao = Number(promtpt());
    if (opcao == 2) {
        console.log("Você votou no candidato Beltrano!");
        j++;
    }
    if (opcao == 3) {
        console.log("Você votou no candidato Carlos!");
        k++;
    }
    if (opcao == 0) {
        console.log("Saindo...");
        break;
    }
}
console.log("Votos para Armindo: " + i);
console.log("Votos para Beltrano: " + j);
console.log("Votos para Carlos: " + k);
console.log("Votos totais: " + (i + j + k));