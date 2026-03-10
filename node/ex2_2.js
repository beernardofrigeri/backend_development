const prompt = require("prompt-sync")();

/* instrução: verifique se eles formam um triângulo
(a sonoma do dois lados deve ser maior que o terceiro.). */
let a = Number(prompt("Informe o lado A: "));
let b = Number(prompt("Informe o lado B: "));
let c = Number(prompt("Informe o lado C: "));
if(a + b > c  && a + c > b && b + c > a){
    console.log("É um triângulo!")
}
else {
    console.log("Não é um triângulo")
}