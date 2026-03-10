const prompt = require("prompt-sync")();

let grau = Number(prompt("Informe a temperatura atual em graus Celsius (sem '°'): "))
let fahrenheit = (grau * 9/5) + 32

console.log("Bom, em Fahrenheit está: " + fahrenheit, "°")

if (fahrenheit >= 86) {
    console.log("Está bem quente, se esfrie!")
}
else if (fahrenheit >= 50 && fahrenheit <= 86) {
    console.log("Está uma temperatura agradável!")
}
else if (fahrenheit <= 50) {
    console.log("Está frio! Se esquente.")
}
else {
    console.log("Número inválido.")
}