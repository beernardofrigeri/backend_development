const prompt = require("prompt-sync")();

let nome = prompt("Diga-me, meu caro, vosso nome, para registra-lo: ");
let idade = Number(prompt("E agora, diga-me, quantos anos vós tem? "));
let n1 = Number(prompt("E agora, diga-me, a nota inicial do semestre: "));
let n2 = Number(prompt("E agora, diga-me, a nota final do semestre: "));
let soma = n1 + n2;
let media = soma / 2;

if(media >= 7) {
    console.log("Aprovado, meu caro!");
}
else if(media >= 5 && media < 7) {
    console.log("Recuperação, meu caro!");
}
else{
    console.log("Reprovado, que aperreado!");
}

console.log("A média das notas é: " + media);
console.log("A soma das notas é: " + soma);
console.log("Bom nome, " + nome + "!");
console.log("E vós tendes " + idade + " anos!");
//node nome_do_arquivo --> para executar o código no terminal