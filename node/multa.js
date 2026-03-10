const prompt = require("prompt-sync")();

let velocidade = Number(prompt("Informe a sua velocidade na BR116: "))

if(velocidade >= 80) {
    console.log("Alta velocidade, multa: grave.")
}
else if(velocidade <= 80 && velocidade >= 60) {
    console.log("Média velocidade, multa: leve")
}
else if(velocidade <= 60) {
    console.log("Velocidade dentro do limite.")
}
else {
    console.log("Dado inserido não é o valor requisitado!")
}