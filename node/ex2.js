const prompt = require("prompt-sync")();

/* instrução: verifique se eles formam um triângulo
(a sonoma do dois lados deve ser maior que o terceiro.). */
let a = Number(prompt("Informe o lado A: "));
let b = Number(prompt("Informe o lado B: "));
let c = Number(prompt("Informe o lado C: "));

if(a + b > c){
    console.log("Sim! É um triângulo")
}
else if (a + c > b){
    console.log("É um triângulo!")
}
else if (b + c > a) {
    console.log("É um triângulo, muito bom!")
}
else {
    console.log("Não é um triângulo")
}