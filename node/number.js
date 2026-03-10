const prompt = require("prompt-sync")();

let n1 = Number(prompt("Insira um número: "))
let n2 = Number(prompt("Insira um segundo número: "))

if (n1 > n2) {
    console.log("O primeiro número é o maior: " + n1)
}
else if (n2 > n1) {
    console.log("O segundo número é o maior: " + n2)
}
else if (n1 == n2) {
    console.log("Os números são equivalentes.")
}
else {
    console.log("NÂO SÃO NÚMEROS!")
}