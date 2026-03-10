const prompt = require("prompt-sync")();

let salario = Number(prompt("Informe o salário do funcionário Cleiton: "))
let bonus = Number(prompt)
let novoSalario = salario + bonus
if(salario >= 5000) {
    bonus = salario * 0.05
    console.log("Bônus de: " + bonus)
}
else if(salario <= 2001 && salario >= 5000) {
    bonus = salario * 0.10
    console.log("Bônus de: " + bonus)
}
else if(salario <= 2000) {
    bonus = salario * 0.15
    console.log("Bônus de: " + bonus)
}
else {
    console.log("Dado inserido não é o valor requisitado!")
}

console.log("Sendo assim, bônus aplicado é de: " + bonus)
console.log("E o novo salário é de: " + novoSalario)