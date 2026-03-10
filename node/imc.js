/* Peça o peso e altura calcule o IMC peso/altura e classifique:

abaixo de 18.5 (abaixo do peso)
entre 18.5 e 24.9 (peso normal)
25 ou mais -> acima do peso
*/

const prompt = require("prompt-sync")();

let massa = parseFloat(prompt("Digite seu peso em kg: "))
let altura = parseFloat(prompt("Digite sua altura em metros: "))
let IMC = massa / (altura * altura)

if(IMC >= 18.4) {
    console.log("Você está abaixo do peso ideal, " + IMC)
}
else if(IMC >= 18.4 && 25) {
    console.log("Você está no peso ideal, " + IMC)
}
else if(IMC >= 25){
    console.log("Você está acima do peso, " + IMC)
}
else {
    console.log("IMC inválido.")
}