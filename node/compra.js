const prompt = require("prompt-sync")();

let valor = Number(prompt("Insira o valor da compra: "))
let desconto = valor * 10 / 100
let total = valor - desconto
if(valor >= 100){
    console.log("Seu desconto na compra é de R$:" + desconto, " houve um desconto de 10% na compra, ficando no preço de: ", + total)
}else {
    console.log("Sua compra ficou pelo valor total, R$: " + valor, " não houve desconto.")
}