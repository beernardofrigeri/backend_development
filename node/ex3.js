const prompt = require("prompt-sync")();

/*peça três lados de um triângulo se for válido:

todos lados iguais: equilátero
dois lados iguais: isósceles
todos diferentes: escaleno

caso não forme triângulo, informar que é inválido
*/

let a = Number(prompt("Informe o lado A: "));
let b = Number(prompt("Informe o lado B: "));
let c = Number(prompt("Informe o lado C: "));

if((a == b) && (a == c)){
    console.log("É um equilátero!")
}
else if(a === b || a === c || b === c){
    console.log("É um triângulo isósceles.")
}
else if(a + b > c && a + c > b && b + c > a){
    console.log("Triângulo escaleno.")
}
else {
    console.log("Triângulo inválido.")
}