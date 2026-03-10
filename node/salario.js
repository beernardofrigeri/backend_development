const prompt = require("prompt-sync")();

let salario = Number(prompt("Informe o salário do funcionário Cleiton: "))
let bonus = 0

if(salario >= 5000) {
    bonus = salario * 0.05
    console.log("Bônus de: " + bonus)
}
else if(salario > 2000 && salario < 5000 ) {
    bonus = salario * 0.10
}
else if(salario <= 2000) {
    bonus = salario * 0.15
}
else {
    console.log("Dado inserido não é o valor requisitado!")
}

let novoSalario = salario + bonus

console.log("Bônus de: R$: " + bonus)
console.log("Novo salário: R$: " + novoSalario)