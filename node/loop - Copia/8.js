const prompt = require("prompt-sync")();

let i = Number(prompt("Insira um número para ver a tabuada de 1 até 10: "));
let j;

for (j = 1; j <= 10; j++) {
    console.log("Tabuada do " + i + ": " + i + " x " + j + " = " + (i * j));
}