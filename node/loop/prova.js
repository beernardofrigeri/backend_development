const prompt = require("prompt-sync")();

let preco = Number(prompt("Insira o valor da sua compra: "));

if (preco > 100) {
    console.log("Desconto aplicado de 10%!")
    let desconto = preco * 0.10
    let precoFinal = preco - desconto
    console.log("Sua compra ficou por: " + precoFinal)
}
else {
    ("Valor total da compra: " + preco)
}